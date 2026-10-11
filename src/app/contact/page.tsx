import type { Metadata } from 'next';
import { Eyebrow, LinkButton, SectionHead, TagConfirm } from '@/components/ui';
import { ContactDetails, MapPlaceholder, WhatsAppButton } from '@/components/sections';
import { SITE } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Call, email or message BioSense AirCare on WhatsApp. Based in Phursungi, Pune.',
};

const STEPS = [
  { t: 'Add products', d: 'Browse the TASS range or Super Dry service list and press Add to quote or Request service.' },
  { t: 'Check your list', d: 'Open the quote list, set quantities and enter your name, phone and company or location.' },
  { t: 'Send on WhatsApp', d: 'The button opens WhatsApp with your message ready. Nothing is sent until you press Send there.' },
];

export default function ContactPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: 64, paddingBottom: 48 }}>
        <div className="wrap">
          <div className="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 760 }}>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="page-title">Talk to BioSense AirCare</h1>
            <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>
              Call, email or message us on WhatsApp. For prices, add products to your quote list and send it to us in one message.
            </p>
          </div>
          <div className="grid-2 rise d1" style={{ marginTop: 40, gap: 24, alignItems: 'stretch' }}>
            <div className="glass glass-strong" style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>
              <h2 style={{ fontSize: 26, fontWeight: 700 }}>{SITE.name}</h2>
              <ContactDetails />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                <TagConfirm>[address wording to confirm]</TagConfirm>
                <TagConfirm>[opening hours: client to confirm]</TagConfirm>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, paddingTop: 4 }}>
                <WhatsAppButton />
                <LinkButton href="/quote/" variant="glass">Open quote list</LinkButton>
              </div>
            </div>
            <div className="glass glass-strong" style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
              <div style={{ flexGrow: 1, minHeight: 340, display: 'flex' }}><MapPlaceholder height="100%" /></div>
              <div id="directions" style={{ padding: '0 8px 8px' }}>
                <p style={{ fontSize: 14, color: 'var(--ink-3)' }}>Map and directions link: client to confirm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="how" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <SectionHead eyebrow="How it works" title="How to request a quote" />
          <div className="grid-3" style={{ marginTop: 40 }}>
            {STEPS.map((s, i) => (
              <article key={s.t} className="glass hov" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
                <span className="step-n" aria-hidden="true">{i + 1}</span>
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>{s.t}</h3>
                <p style={{ color: 'var(--ink-2)' }}>{s.d}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}><LinkButton href="/products/">Browse products</LinkButton></div>
        </div>
      </section>
    </>
  );
}
