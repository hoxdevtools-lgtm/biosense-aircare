import type { ReactNode } from 'react';
import { SITE } from '@/lib/config';
import { waLink } from '@/lib/whatsapp';
import { SectionHead, TagConfirm, Placeholder, LinkButton } from './ui';
import { IconBolt, IconFlask, IconGrid, IconHome, IconLink, IconMail, IconPhone, IconPin, IconPlus, IconPulse, IconWhatsApp } from './icons';

const APPLICATIONS: { icon: ReactNode; title: string; line: string }[] = [
  { icon: <IconFlask size={28} />, title: 'Laboratories', line: 'Protect sensitive reagents and keep instruments stable' },
  { icon: <IconGrid size={28} />, title: 'Pharmaceutical clean rooms', line: 'Hold strict humidity limits for powders and processes' },
  { icon: <IconPlus size={28} />, title: 'Operation theatres', line: 'Support a controlled, low-humidity environment' },
  { icon: <IconPulse size={28} />, title: 'Intensive care units', line: 'Control humidity to help limit mould growth' },
];

export function Applications({ intro }: { intro: ReactNode }) {
  return (
    <div className="wrap">
      {intro}
      <div className="grid-2" style={{ marginTop: 40 }}>
        {APPLICATIONS.map((a) => (
          <article key={a.title} className="glass hov" style={{ padding: 32, display: 'flex', gap: 24, alignItems: 'flex-start' }}>
            <div className="icon-tile" style={{ width: 56, height: 56 }}>{a.icon}</div>
            <div style={{ minWidth: 0 }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.25 }}>{a.title}</h3>
              <p style={{ marginTop: 8, color: 'var(--ink-2)' }}>{a.line}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const WHY: { icon: ReactNode; text: string }[] = [
  { icon: <IconHome size={26} />, text: 'Sales and service under one roof.' },
  { icon: <IconBolt size={26} />, text: 'Custom voltage and frequency, with OEM and ODM options.' },
  { icon: <IconLink size={26} />, text: 'Engineering help with sizing and building-system (BMS) connection. P-series units have 24 V dry contacts as standard.' },
  { icon: <IconPin size={26} />, text: 'Local support from Pune.' },
];

export function WhyChooseUs() {
  return (
    <div className="wrap">
      <SectionHead eyebrow="Why BioSense AirCare" title="Why choose us" />
      <div className="grid-4" style={{ marginTop: 40 }}>
        {WHY.map((w) => (
          <article key={w.text} className="glass hov" style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div className="icon-tile" style={{ width: 52, height: 52 }}>{w.icon}</div>
            <p style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.4 }}>{w.text}</p>
            <TagConfirm />
          </article>
        ))}
      </div>
    </div>
  );
}

export function ContactDetails() {
  const row = (icon: ReactNode, body: ReactNode) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <span style={{ flex: 'none', color: 'var(--teal-700)', paddingTop: 2 }}>{icon}</span>
      <div style={{ minWidth: 0, color: 'var(--ink-2)', overflowWrap: 'anywhere' }}>{body}</div>
    </div>
  );
  return (
    <>
      {row(<IconPin />, <address style={{ fontStyle: 'normal' }}>{SITE.address}</address>)}
      {row(
        <IconPhone />,
        <p>
          {SITE.phones.map((p, i) => (
            <span key={p.tel}>
              {i > 0 && ' · '}
              <a className="link-quiet" href={`tel:${p.tel}`}>{p.label}</a>
            </span>
          ))}
        </p>,
      )}
      {row(<IconMail />, <p><a className="link-quiet" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>)}
    </>
  );
}

export function WhatsAppButton({ label = 'Chat on WhatsApp' }: { label?: string }) {
  return (
    <LinkButton href={waLink()} variant="wa" target="_blank" rel="noopener noreferrer">
      <IconWhatsApp />
      {label}
    </LinkButton>
  );
}

export function MapPlaceholder({ height }: { height: number | string }) {
  return <Placeholder lines={['Map placeholder', 'Phursungi, Pune']} style={{ height, width: '100%' }} />;
}
