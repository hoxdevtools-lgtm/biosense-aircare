import type { Metadata } from 'next';
import { Eyebrow, LinkButton, Placeholder, SectionHead, TagConfirm } from '@/components/ui';
import { Applications, WhyChooseUs } from '@/components/sections';
import { IconWrench } from '@/components/icons';

export const metadata: Metadata = {
  title: 'About',
  description: 'BioSense AirCare Pvt Ltd is a Pune-based specialist in temperature and relative humidity control.',
};

const STATS: [string, string][] = [['00', 'Years in business'], ['000', 'Installations'], ['00', 'Clients served'], ['00', 'Cities served']];

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div className="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20, minWidth: 0 }}>
              <Eyebrow>About us</Eyebrow>
              <h1 className="page-title">Temperature and humidity control, from Pune</h1>
              <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 560 }}>
                BioSense AirCare Pvt Ltd is a Pune-based specialist in temperature and relative humidity (RH) control. We supply TASS ceiling-mounted dehumidifiers, our own product line, and we service Super Dry drying cabinets.
              </p>
              <TagConfirm>[client to confirm: company story, founding year, team]</TagConfirm>
            </div>
            <div className="rise d2" style={{ minWidth: 0 }}>
              <div className="glass glass-strong" style={{ padding: 20 }}>
                <Placeholder lines={['Team or facility photo', '[client to supply]']} style={{ height: 340, width: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: 48 }}>
        <div className="wrap">
          <SectionHead eyebrow="By the numbers" title="Our track record">Real figures go here once the client supplies them.</SectionHead>
          <div className="grid-4" style={{ marginTop: 40 }}>
            {STATS.map(([n, label]) => (
              <article key={label} className="glass glass-dim" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="stat-big" aria-hidden="true">{n}</span>
                <p style={{ fontWeight: 600 }}>{label}</p>
                <TagConfirm style={{ alignSelf: 'flex-start' }} />
              </article>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: 14, color: 'var(--ink-3)' }}>Placeholders only. No figures are shown until the client supplies real ones.</p>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: 48 }}>
        <div className="wrap">
          <SectionHead eyebrow="What we do" title="Sales and service under one roof" />
          <div className="grid-2" style={{ marginTop: 40 }}>
            <article className="glass hov" style={{ padding: 36, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              <span className="badge-tass" role="img" aria-label="TASS">TASS</span>
              <h3 style={{ fontSize: 26, fontWeight: 800 }}>Sales: TASS dehumidifiers</h3>
              <p style={{ color: 'var(--ink-2)' }}>Ceiling-mounted dehumidifiers from 20 to 960 litres per day, with custom voltage and frequency. OEM and ODM options are available.</p>
              <LinkButton href="/products/#tass">See the TASS range</LinkButton>
            </article>
            <article className="glass hov" style={{ padding: 36, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              <span className="icon-tile" style={{ width: 52, height: 52 }}><IconWrench size={26} /></span>
              <h3 style={{ fontSize: 26, fontWeight: 800 }}>Service: Super Dry cabinets</h3>
              <p style={{ color: 'var(--ink-2)' }}>Service and support for Super Dry drying cabinets in the SDB, SD, SD+ and HSD ranges.</p>
              <LinkButton href="/products/#service" variant="glass">Request service</LinkButton>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBlock: 48 }}>
        <Applications
          intro={
            <SectionHead eyebrow="Who we serve" title="Where precise humidity matters">
              We help facilities hold temperature and relative humidity inside the limits their work demands.
            </SectionHead>
          }
        />
      </section>

      <section className="section" style={{ paddingBlock: 48 }}><WhyChooseUs /></section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="glass glass-strong" style={{ padding: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 620 }}>
              <h2 className="sec-title">Need help choosing a unit?</h2>
              <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>Tell us the room and the humidity you need to hold. We will help you size it.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              <LinkButton href="/quote/">Request a Quote</LinkButton>
              <LinkButton href="/contact/" variant="glass">Contact us</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
