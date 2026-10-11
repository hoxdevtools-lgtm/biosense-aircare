import type { Metadata } from 'next';
import { Eyebrow } from '@/components/ui';
import { QuoteView } from '@/components/QuoteView';

export const metadata: Metadata = {
  title: 'Quote list',
  description: 'Set quantities, add your details and send your quote list to BioSense AirCare on WhatsApp.',
};

export default function QuotePage() {
  return (
    <section className="section" style={{ paddingTop: 64, paddingBottom: 96 }}>
      <div className="wrap">
        <div className="rise" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 760 }}>
          <Eyebrow>Quote list</Eyebrow>
          <h1 className="page-title">Your quote list</h1>
          <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>
            Set quantities, add your details, then send the list to us on WhatsApp. Nothing is sent from this website. You press Send inside WhatsApp.
          </p>
        </div>
        <QuoteView />
      </div>
    </section>
  );
}
