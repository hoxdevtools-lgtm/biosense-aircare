'use client';

import { useQuote } from '@/lib/quote';
import type { Product } from '@/lib/products';

const LABEL: Record<string, string> = { compact: 'Compact', standard: 'Standard', industrial: 'Industrial' };

function power(p: Product) {
  return `${p.volt} / 50 Hz, ${p.power}`;
}

export function FeaturedModels({ models }: { models: Product[] }) {
  const { add, qtyOf } = useQuote();
  return (
    <div className="grid-2 models" style={{ marginTop: 40 }}>
      {models.map((p) => {
        const q = qtyOf(p.id);
        const rows: [string, string][] = [
          ['Capacity', `${p.cap} at ${p.cond}`],
          ['Airflow', p.air],
          ['Power', power(p)],
          ['Refrigerant', p.ref],
          ['Noise', p.noise],
          ['Net weight', p.kg],
          ['Size (L×W×H)', p.size],
        ];
        return (
          <article key={p.id} className="glass hov" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.01em' }}>{p.id}</h3>
              <span className="pill">{LABEL[p.group] ?? p.groupLabel}</span>
            </div>
            <dl style={{ margin: 0 }}>
              {rows.map(([k, v]) => (
                <div key={k} className="spec"><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            <button
              className={`btn ${q > 0 ? 'btn-glass' : 'btn-primary'}`}
              style={{ alignSelf: 'flex-start' }}
              onClick={() => add({ id: p.id, kind: 'tass', name: p.id, img: p.img })}
            >
              {q > 0 ? `Added x${q}, add more` : 'Add to quote'}
            </button>
          </article>
        );
      })}
    </div>
  );
}
