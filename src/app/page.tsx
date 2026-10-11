import Link from 'next/link';
import { SectionHead, Eyebrow, PhotoStage, LinkButton } from '@/components/ui';
import { Applications, ContactDetails, MapPlaceholder, WhatsAppButton, WhyChooseUs } from '@/components/sections';
import { IconThermo, IconWifi } from '@/components/icons';
import { SITE } from '@/lib/config';
import { PRODUCTS } from '@/lib/products';
import { FeaturedModels } from '@/components/FeaturedModels';

export default function Home() {
  const featured = ['TASS-201E', 'TASS-9681E'].map((id) => PRODUCTS.find((p) => p.id === id)!);

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="hero-grid">
            <div className="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 24, minWidth: 0 }}>
              <span className="badge-tass" role="img" aria-label="TASS">TASS</span>
              <h1 className="hero-title">{SITE.headline}</h1>
              <p style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontSize: 28, fontWeight: 600, lineHeight: 1.3, color: 'var(--teal-700)' }}>{SITE.caption}</p>
              <p style={{ fontSize: 18, maxWidth: 520, color: 'var(--ink-2)' }}>
                Precision temperature and humidity control for laboratories, pharmaceutical clean rooms, operation theatres and ICUs.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, paddingTop: 8 }}>
                <LinkButton href="/quote/">Request a Quote</LinkButton>
                <LinkButton href="/products/" variant="glass">Explore Products</LinkButton>
              </div>
            </div>

            <div className="rise d2" style={{ position: 'relative', padding: '16px 0 24px', minWidth: 0 }} aria-hidden="true">
              <div className="glass glass-strong" style={{ padding: 24 }}>
                <div className="photo-stage" style={{ aspectRatio: '1 / 1', width: '100%' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="photo-cut" src="/photos/hero-cabinet.webp" alt="" style={{ width: '92%', height: '92%' }} />
                </div>
              </div>
              <div className="bob" style={{ position: 'absolute', top: 0, right: 20 }}>
                <div className="glass glass-strong" style={{ padding: '12px 20px', borderRadius: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="live-dot" />
                  <span style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '0.01em', fontVariantNumeric: 'tabular-nums' }}>RH 60% · 22 °C</span>
                </div>
              </div>
              <div className="bob s2" style={{ position: 'absolute', bottom: 0, left: 20 }}>
                <div className="glass glass-strong" style={{ padding: '10px 18px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>RH control 40–95%</div>
              </div>
              <div className="bob s3" style={{ position: 'absolute', bottom: 56, right: -4 }}>
                <div className="glass glass-strong" style={{ padding: '10px 18px', borderRadius: 999, fontSize: 15, fontWeight: 600 }}>20–960 L/day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialists */}
      <section className="section" id="specialists">
        <Applications
          intro={
            <SectionHead eyebrow="Who we serve" title="Temperature & RH specialists">
              BioSense AirCare helps facilities hold temperature and relative humidity inside the limits their work demands. We supply and service equipment for places where a few points of humidity make a difference.
            </SectionHead>
          }
        />
      </section>

      {/* Products */}
      <section className="section" id="products">
        <div className="wrap">
          <SectionHead eyebrow="Products & service" title="Equipment and service under one roof" />

          <div className="grid-4" style={{ marginTop: 48 }}>
            <article className="glass hov" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="glass glass-strong" style={{ padding: 12, borderRadius: 18, boxShadow: 'none' }}>
                <PhotoStage src="/photos/superdry-cabinet.webp" alt="Super Dry drying cabinet with six glass doors" height={168} imgSize="90%" />
              </div>
              <div style={{ padding: '0 8px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>Super Dry: Service &amp; Support</h3>
                <p style={{ fontSize: 16, color: 'var(--ink-2)' }}>Expert service for Super Dry drying cabinets: SDB, SD, SD+ and HSD series</p>
              </div>
              <div style={{ padding: '0 8px 8px' }}><LinkButton href="/products/#service" style={{ width: '100%' }}>Request service</LinkButton></div>
            </article>

            <article className="glass hov" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="glass glass-strong" style={{ padding: 12, borderRadius: 18, boxShadow: 'none' }}>
                <PhotoStage src="/photos/tass-ceiling.webp" alt="TASS ceiling-mounted dehumidifier with wall controller" height={168} />
              </div>
              <div style={{ padding: '0 8px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>TASS Ceiling-Mounted Dehumidifiers</h3>
                <p style={{ fontSize: 16, color: 'var(--ink-2)' }}>From 20 to 960 litres per day, with custom voltage and frequency</p>
              </div>
              <div style={{ padding: '0 8px 8px' }}><LinkButton href="/products/#tass" style={{ width: '100%' }}>Add to quote</LinkButton></div>
            </article>

            <ComingSoon icon={<IconThermo size={56} sw={1.4} />} title="Lab Environment Equipment" line="Equipment to maintain the atmosphere inside your lab" />
            <ComingSoon icon={<IconWifi size={56} sw={1.4} />} title="IoT Monitoring & Control" line="Connected products for temperature and humidity" />
          </div>
          <p style={{ marginTop: 24, fontSize: 14, color: 'var(--ink-3)' }}>{SITE.trademark}</p>

          <div id="models" style={{ marginTop: 96, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 720 }}>
            <Eyebrow>TASS range</Eyebrow>
            <h2 className="sec-title">Featured TASS models</h2>
          </div>
          <FeaturedModels models={featured} />
        </div>
      </section>

      <section className="section" id="why"><WhyChooseUs /></section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="wrap">
          <div className="glass glass-strong" style={{ padding: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 720, marginBottom: 40 }}>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="sec-title">Talk to BioSense AirCare</h2>
            </div>
            <div className="grid-2" style={{ gap: 48, alignItems: 'start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>
                <h3 style={{ fontSize: 24, fontWeight: 700 }}>{SITE.name}</h3>
                <ContactDetails />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
                <div style={{ alignSelf: 'flex-start' }}><WhatsAppButton /></div>
                <div className="glass" style={{ padding: 12, borderRadius: 22, boxShadow: 'none' }}><MapPlaceholder height={200} /></div>
                <Link className="link-quiet" href="/contact/" style={{ alignSelf: 'flex-start' }}>Get directions</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ComingSoon({ icon, title, line }: { icon: React.ReactNode; title: string; line: string }) {
  return (
    <article className="glass glass-dim" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ height: 192, borderRadius: 18, border: '1px solid rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--teal-700)', position: 'relative' }}>
        <span className="pill" style={{ position: 'absolute', top: 12, right: 12 }}>Coming soon</span>
        {icon}
      </div>
      <div style={{ padding: '0 8px', flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.25 }}>{title}</h3>
        <p style={{ fontSize: 16, color: 'var(--ink-2)' }}>{line}</p>
      </div>
      <div style={{ padding: '0 8px 8px' }}><button className="btn btn-off" disabled style={{ width: '100%' }}>Coming soon</button></div>
    </article>
  );
}
