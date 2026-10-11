'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { QUOTE_MAX_LINES, QUOTE_MAX_QTY } from '@/lib/config';
import { useQuote } from '@/lib/quote';
import { buildMessage, waLink } from '@/lib/whatsapp';
import { IconCart, IconClose, IconWhatsApp } from './icons';

export function QuoteView() {
  const { items, setQty, remove, clear } = useQuote();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const uid = useId();

  const ordered = [...items.filter((i) => i.kind !== 'svc'), ...items.filter((i) => i.kind === 'svc')];
  const isEmpty = items.length === 0;
  const message = buildMessage(items, name, phone, org);
  const canSend = !isEmpty && name.trim().length > 0 && phone.trim().length > 0;
  const hint = isEmpty ? 'Add a product to enable this button.' : 'Add your name and phone to enable this button.';

  return (
    <div className="quote-grid rise d1" style={{ marginTop: 40 }}>
      <div style={{ minWidth: 0 }}>
        {isEmpty ? (
          <div className="glass glass-dim" style={{ padding: '64px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
            <span className="icon-tile" style={{ width: 72, height: 72, borderRadius: 22 }}><IconCart size={34} sw={1.5} /></span>
            <h2 style={{ fontSize: 28, fontWeight: 700 }}>Your quote list is empty</h2>
            <p style={{ color: 'var(--ink-2)', maxWidth: 440 }}>
              Browse the TASS range to add models, or request service for a Super Dry cabinet. Your list is saved on this device, so it is still here if you come back.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, paddingTop: 8 }}>
              <Link className="btn btn-primary" href="/products/">Browse products</Link>
              <Link className="btn btn-glass" href="/products/#service">Request Super Dry service</Link>
            </div>
          </div>
        ) : (
          <div className="glass glass-strong" style={{ padding: '28px 32px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', paddingBottom: 12 }}>
              <h2 style={{ fontSize: 22, fontWeight: 700 }}>{items.length} {items.length === 1 ? 'line' : 'lines'} in your list</h2>
              <button className="btn btn-glass btn-sm" onClick={clear}>Clear list</button>
            </div>
            <div>
              {ordered.map((item) => (
                <div key={item.id} className="qrow">
                  {item.img ? (
                    <div className="photo-stage" style={{ width: 84, height: 72, borderRadius: 14 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="photo-cut" src={item.img} alt="" style={{ width: '90%', height: '90%' }} />
                    </div>
                  ) : (
                    <div className="ph" style={{ width: 84, height: 72, padding: 4, fontSize: 11, borderRadius: 14 }}><span>Photo</span></div>
                  )}
                  <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 6 }}>
                    <p style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontWeight: 800, fontSize: 19, lineHeight: 1.25, overflowWrap: 'anywhere' }}>{item.name}</p>
                    <span className="pill" style={{ minHeight: 24, fontSize: 11 }}>{item.kind === 'svc' ? 'Service request' : 'TASS'}</span>
                  </div>
                  <div className="stepper q-step" role="group" aria-label={`Quantity for ${item.name}`}>
                    <button aria-label="Decrease quantity" disabled={item.qty <= 1} onClick={() => setQty(item.id, item.qty - 1)}>−</button>
                    <output aria-live="polite">{item.qty}</output>
                    <button aria-label="Increase quantity" disabled={item.qty >= QUOTE_MAX_QTY} onClick={() => setQty(item.id, item.qty + 1)}>+</button>
                  </div>
                  <button className="icon-btn q-rm" aria-label={`Remove ${item.name} from list`} onClick={() => remove(item.id)}><IconClose size={20} sw={2} /></button>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px 24px', padding: '16px 0 12px', borderTop: '1px solid rgba(15,23,42,0.1)' }}>
              <Link className="link-quiet" href="/products/">Add more products</Link>
              <p style={{ fontSize: 14, color: 'var(--ink-3)' }}>Up to {QUOTE_MAX_LINES} items per request, so the WhatsApp link stays short.</p>
            </div>
          </div>
        )}
      </div>

      <aside className="glass glass-strong" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Your details</h2>
        <div>
          <label className="lbl" htmlFor={`${uid}-name`}>Name</label>
          <input id={`${uid}-name`} className="field" type="text" autoComplete="name" value={name} disabled={isEmpty} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="lbl" htmlFor={`${uid}-phone`}>Phone</label>
          <input id={`${uid}-phone`} className="field" type="tel" autoComplete="tel" value={phone} disabled={isEmpty} onChange={(e) => setPhone(e.target.value)} placeholder="+91 ..." />
        </div>
        <div>
          <label className="lbl" htmlFor={`${uid}-org`}>Company or location</label>
          <input id={`${uid}-org`} className="field" type="text" autoComplete="organization" value={org} disabled={isEmpty} onChange={(e) => setOrg(e.target.value)} placeholder="Company name, city" />
        </div>
        <div>
          <p className="lbl">Message preview</p>
          {isEmpty ? (
            <div className="glass-dim" style={{ padding: '16px 18px', borderRadius: 18, fontSize: 15, color: 'var(--ink-2)', border: '1.5px dashed rgba(15,23,42,0.35)' }}>
              Your message appears here once you add a product.
            </div>
          ) : (
            <div className="msg">{message}</div>
          )}
        </div>
        {canSend ? (
          <a className="btn btn-wa" href={waLink(message)} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
            <IconWhatsApp />Send on WhatsApp
          </a>
        ) : (
          <>
            <button className="btn btn-off" disabled style={{ width: '100%' }}>Send on WhatsApp</button>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: -8 }}>{hint}</p>
          </>
        )}
        <p style={{ fontSize: 14, color: 'var(--ink-3)' }}>The button opens WhatsApp with this message ready to send. Nothing is sent until you press Send there.</p>
      </aside>
    </div>
  );
}
