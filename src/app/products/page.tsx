import type { Metadata } from 'next';
import { Eyebrow, TagConfirm } from '@/components/ui';
import { ProductBrowser } from '@/components/ProductBrowser';
import { SuperDryService } from '@/components/SuperDryService';
import { IconDroplet, IconCustom, IconRange, IconThermo, IconWifi } from '@/components/icons';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Products',
  description: 'TASS ceiling-mounted dehumidifiers from 20 to 960 litres per day, and Super Dry cabinet service. Build a quote list and send it on WhatsApp.',
};

const COMMON = [
  { icon: <IconDroplet size={22} />, t: 'RH control', d: '40% to 95% RH' },
  { icon: <IconRange size={22} />, t: 'Working range', d: '5 to 38 °C, hose drainage' },
  { icon: <IconThermo size={22} />, t: 'Refrigerant', d: 'R410a (TASS-201E: R134a)' },
  { icon: <IconCustom size={22} />, t: 'Made to order', d: 'Voltage and frequency customisable, OEM and ODM' },
];

function ComingSoonPanel({ icon, title, line }: { icon: React.ReactNode; title: string; line: string }) {
  return (
    <div className="glass glass-dim" style={{ padding: 32 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span className="icon-tile" style={{ width: 52, height: 52 }}>{icon}</span>
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 700 }}>{title}</h3>
            <p style={{ color: 'var(--ink-2)' }}>{line}</p>
          </div>
        </div>
        <span className="pill">Coming soon</span>
      </div>
      <div className="grid-3" style={{ marginTop: 24 }}>
        {[0, 1, 2].map((i) => (
          <div key={i} aria-hidden="true" style={{ padding: 16, borderRadius: 22, border: '1.5px dashed rgba(15,23,42,0.3)', background: 'rgba(255,255,255,0.3)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="ph" style={{ height: 120 }}><span>[product photo]</span></div>
            <p style={{ fontWeight: 700 }}>[product name]</p>
            <p style={{ fontSize: 15, color: 'var(--ink-2)' }}>[spec line]</p>
            <button className="btn btn-off btn-sm" disabled tabIndex={-1}>Coming soon</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64, paddingBottom: 24 }}>
        <div className="wrap">
          <div className="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 820 }}>
            <Eyebrow>Products &amp; service</Eyebrow>
            <h1 className="page-title">Dehumidifiers and drying-cabinet service</h1>
            <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 680 }}>
              Browse the TASS ceiling-mounted range, add the models you want to your quote list, and send it to us on WhatsApp. Super Dry cabinet owners can request service the same way.
            </p>
          </div>
          <div className="rise d1" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 10px', marginTop: 28 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink-2)' }}>To confirm before launch:</span>
            <TagConfirm>Model names as TASS-&lt;number&gt;</TagConfirm>
            <TagConfirm>Show all 21 models or a selection</TagConfirm>
            <TagConfirm>Right to use supplier photos</TagConfirm>
            <TagConfirm>Group for 11 models</TagConfirm>
          </div>
        </div>
      </section>

      <section className="section" id="tass" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="glass glass-strong" style={{ padding: '28px 32px' }}>
            <div className="grid-4" style={{ gap: 24 }}>
              {COMMON.map((c) => (
                <div key={c.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span className="icon-tile" style={{ width: 44, height: 44, borderRadius: 14 }}>{c.icon}</span>
                  <div><p style={{ fontWeight: 700 }}>{c.t}</p><p style={{ fontSize: 15, color: 'var(--ink-2)' }}>{c.d}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 72, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 760 }}>
            <Eyebrow>TASS range</Eyebrow>
            <h2 className="sec-title">TASS ceiling-mounted dehumidifiers</h2>
            <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>Our own product line. Capacity is shown with its test condition, because the datasheets quote two different ones.</p>
          </div>
          <ProductBrowser />
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-3)' }}>24 V dry contacts are standard on P-series models and optional on the others.</p>
        </div>
      </section>

      <section className="section" id="service">
        <div className="wrap">
          <SuperDryService />
          <p style={{ marginTop: 24, fontSize: 14, color: 'var(--ink-3)' }}>{SITE.trademark}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ComingSoonPanel icon={<IconThermo size={26} />} title="Lab and atmosphere-control equipment" line="Product cards will appear here when the brochures arrive." />
          <ComingSoonPanel icon={<IconWifi size={26} />} title="IoT-based products" line="Connected monitoring and control. Product cards will appear here soon." />
        </div>
      </section>
    </>
  );
}
