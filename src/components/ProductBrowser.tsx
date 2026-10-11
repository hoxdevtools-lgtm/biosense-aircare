'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { GROUP_NOTES, GROUP_TABS, PRODUCTS, productDetailRows, type Group, type Product } from '@/lib/products';
import { useQuote } from '@/lib/quote';
import { QUOTE_MAX_LINES } from '@/lib/config';
import { IconClose, IconSearch } from './icons';

function useColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const calc = () => setCols(window.innerWidth >= 1280 ? 4 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);
  return cols;
}

function Detail({ p, onClose }: { p: Product; onClose: () => void }) {
  const { add, qtyOf } = useQuote();
  const q = qtyOf(p.id);
  return (
    <article className="glass glass-strong detail-grid" style={{ gridColumn: '1 / -1', padding: 32 }} aria-label={`${p.id} details`}>
      <div className="photo-stage" style={{ height: 360, width: '100%', borderRadius: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="photo-cut" src={p.img} alt={`${p.id} ceiling-mounted dehumidifier`} style={{ width: '90%', height: '90%' }} />
      </div>
      <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <h3 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.01em' }}>{p.id}</h3>
            <span className={`pill ${p.group === 'tbc' ? 'tbc' : ''}`}>{p.groupLabel}</span>
          </div>
          <button className="icon-btn" aria-label="Close details" onClick={onClose}><IconClose size={20} sw={2} /></button>
        </div>
        <dl className="spec-cols">
          {productDetailRows(p).map((r) => (
            <div key={r.k} className="spec"><dt>{r.k}</dt><dd>{r.v}</dd></div>
          ))}
        </dl>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px 16px', paddingTop: 4 }}>
          <button className={`btn ${q > 0 ? 'btn-glass' : 'btn-primary'}`} onClick={() => add({ id: p.id, kind: 'tass', name: p.id, img: p.img })}>
            {q > 0 ? `Added x${q}, add another` : 'Add to quote'}
          </button>
          <Link className="btn btn-glass" href="/quote/">View quote list</Link>
          <button className="btn btn-glass" onClick={onClose}>Close</button>
        </div>
      </div>
    </article>
  );
}

function Card({ p, open, onToggle }: { p: Product; open: boolean; onToggle: () => void }) {
  const { add, qtyOf } = useQuote();
  const q = qtyOf(p.id);
  return (
    <article className={`glass hov ${open ? 'card-open' : ''}`} style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="photo-stage" style={{ height: 164, width: '100%', borderRadius: 14 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="photo-cut" src={p.img} alt={`${p.id} ceiling-mounted dehumidifier`} style={{ width: '92%', height: '92%' }} loading="lazy" decoding="async" />
      </div>
      <div style={{ padding: '0 6px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          <h3 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>{p.id}</h3>
          <span className={`pill ${p.group === 'tbc' ? 'tbc' : ''}`}>{p.groupLabel}</span>
        </div>
        <dl style={{ margin: 0 }}>
          <div className="spec-sm"><dt>Capacity</dt><dd>{p.cap}<small>at {p.cond}</small></dd></div>
          <div className="spec-sm"><dt>Airflow</dt><dd>{p.air}</dd></div>
          <div className="spec-sm"><dt>Power</dt><dd>{p.power}, {p.volt}</dd></div>
        </dl>
      </div>
      <div style={{ padding: '0 6px 6px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button className={`btn btn-sm ${q > 0 ? 'btn-glass' : 'btn-primary'}`} style={{ width: '100%' }} onClick={() => add({ id: p.id, kind: 'tass', name: p.id, img: p.img })}>
          {q > 0 ? `Added x${q}, add more` : 'Add to quote'}
        </button>
        <button className="btn btn-sm btn-glass" style={{ width: '100%' }} aria-expanded={open} onClick={onToggle}>
          {open ? 'Hide details' : 'Details'}
        </button>
      </div>
    </article>
  );
}

export function ProductBrowser() {
  const [grp, setGrp] = useState<'all' | Group>('all');
  const [term, setTerm] = useState('');
  const [sel, setSel] = useState<string | null>(null);
  const { full } = useQuote();
  const cols = useColumns();

  const visible = useMemo(() => {
    const t = term.trim().toLowerCase();
    return PRODUCTS.filter((p) => (grp === 'all' || p.group === grp) && (!t || p.id.toLowerCase().includes(t)));
  }, [grp, term]);

  const selIdx = visible.findIndex((p) => p.id === sel);
  const detailBefore = selIdx >= 0 ? Math.floor(selIdx / cols) * cols : -1;

  return (
    <>
      <div style={{ marginTop: 32, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px 24px' }}>
        <div className="tabs" role="group" aria-label="Filter by group">
          {GROUP_TABS.map((t) => {
            const n = t.key === 'all' ? PRODUCTS.length : PRODUCTS.filter((p) => p.group === t.key).length;
            return (
              <button key={t.key} className={`tab ${grp === t.key ? 'on' : ''}`} aria-pressed={grp === t.key} onClick={() => { setGrp(t.key); setSel(null); }}>
                {t.label}<span className="n">{n}</span>
              </button>
            );
          })}
        </div>
        <div style={{ flex: '1 1 260px', maxWidth: 360, minWidth: 0 }}>
          <label htmlFor="model-search" className="sr-only">Search models</label>
          <input id="model-search" className="field" type="search" value={term} onChange={(e) => { setTerm(e.target.value); setSel(null); }} placeholder="Search model, e.g. 901E" />
        </div>
      </div>
      <p style={{ marginTop: 16, fontSize: 15, color: 'var(--ink-3)' }}>{GROUP_NOTES[grp]}</p>

      {full && (
        <div className="glass glass-dim" role="status" style={{ marginTop: 16, padding: '14px 20px', borderRadius: 18, fontSize: 15, fontWeight: 500 }}>
          Your quote list holds up to {QUOTE_MAX_LINES} items. Remove one on the quote list page to add another.
        </div>
      )}

      {visible.length > 0 ? (
        <div className="grid-4" style={{ marginTop: 24, alignItems: 'stretch' }}>
          {visible.map((p, i) => (
            <FragmentWithDetail key={p.id} showDetail={i === detailBefore} detail={selIdx >= 0 ? <Detail p={visible[selIdx]} onClose={() => setSel(null)} /> : null}>
              <Card p={p} open={p.id === sel} onToggle={() => setSel(p.id === sel ? null : p.id)} />
            </FragmentWithDetail>
          ))}
        </div>
      ) : (
        <div className="glass glass-dim" style={{ marginTop: 24, padding: '56px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
          <span className="icon-tile" style={{ width: 64, height: 64, borderRadius: 20 }}><IconSearch size={30} /></span>
          <h3 style={{ fontSize: 24, fontWeight: 700 }}>No models match</h3>
          <p style={{ color: 'var(--ink-2)', maxWidth: 440 }}>Try a different model number, or clear the filter to see the whole TASS range.</p>
          <button className="btn btn-primary" onClick={() => { setGrp('all'); setTerm(''); setSel(null); }}>Clear filter and search</button>
        </div>
      )}
    </>
  );
}

function FragmentWithDetail({ showDetail, detail, children }: { showDetail: boolean; detail: React.ReactNode; children: React.ReactNode }) {
  return (
    <>
      {showDetail && detail}
      {children}
    </>
  );
}
