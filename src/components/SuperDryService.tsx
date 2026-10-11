'use client';

import Link from 'next/link';
import { SUPER_DRY_SERIES } from '@/lib/products';
import { useQuote } from '@/lib/quote';
import { TagConfirm } from './ui';

export function SuperDryService() {
  const { add, qtyOf } = useQuote();
  return (
    <>
      <div className="glass glass-strong" style={{ padding: 40 }}>
        <div className="detail-grid" style={{ alignItems: 'center' }}>
          <div className="photo-stage" style={{ height: 380, width: '100%', borderRadius: 22 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="photo-cut" src="/photos/hero-cabinet.webp" alt="Super Dry drying cabinet" style={{ width: '82%', height: '92%' }} loading="lazy" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, minWidth: 0 }}>
            <span className="eyebrow">Super Dry: Service &amp; Support</span>
            <h2 className="sec-title">Service for Super Dry® drying cabinets</h2>
            <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>
              We service imported Super Dry cabinets in the SDB, SD, SD+ and HSD ranges. We do not sell them. Pick your model below and add it to your service request.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <TagConfirm>Service-partner status: client to confirm</TagConfirm>
              <TagConfirm>Catalogue data: Totech 2019, use to confirm</TagConfirm>
            </div>
            <Link className="btn btn-glass" href="/quote/">View quote list</Link>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 24, alignItems: 'start' }}>
        {SUPER_DRY_SERIES.map((se) => (
          <article key={se.key} className="glass hov" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div className="ph" style={{ width: 132, height: 100, flex: 'none', padding: 8, fontSize: 12 }}><span>Photo: {se.name}</span></div>
              <div style={{ minWidth: 0 }}>
                <h3 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.01em' }}>Super Dry {se.name}</h3>
                <p style={{ marginTop: 6, fontSize: 15, color: 'var(--ink-2)' }}>{se.pos}</p>
              </div>
            </div>
            <div>
              {se.models.map(([id, cap]) => {
                const q = qtyOf(id);
                return (
                  <div key={id} className="sd-row">
                    <span style={{ fontWeight: 600 }}>{id}</span>
                    <span className="sd-cap" style={{ fontSize: 15, color: 'var(--ink-3)' }}>{cap} capacity</span>
                    <button className={`btn btn-sm ${q > 0 ? 'btn-primary' : 'btn-glass'}`} onClick={() => add({ id, kind: 'svc', name: `Super Dry ${id}`, img: null })}>
                      {q > 0 ? `Added x${q}, add more` : 'Request service'}
                    </button>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
