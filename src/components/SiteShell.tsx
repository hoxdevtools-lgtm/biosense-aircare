'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE } from '@/lib/config';
import { useQuote } from '@/lib/quote';
import { IconCart, IconMenu } from './icons';

function Liquid() {
  return (
    <>
      <div className="mesh" aria-hidden="true" />
      <div className="blob a sky" aria-hidden="true" style={{ top: '-120px', left: '-160px', width: 620, height: 580 }} />
      <div className="blob b mint" aria-hidden="true" style={{ top: '9%', right: -180, width: 600, height: 560 }} />
      <div className="blob a lav" aria-hidden="true" style={{ top: '30%', left: -200, width: 560, height: 520 }} />
      <div className="blob b sky" aria-hidden="true" style={{ top: '54%', right: -160, width: 580, height: 540 }} />
      <div className="blob a mint" aria-hidden="true" style={{ top: '76%', left: '12%', width: 640, height: 560 }} />
      <div className="blob b lav" aria-hidden="true" style={{ top: '86%', right: '4%', width: 460, height: 440 }} />
    </>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? '/';
  const { count } = useQuote();
  const quoteCurrent = pathname.startsWith('/quote');

  return (
    <header style={{ position: 'sticky', top: 16, zIndex: 30, paddingTop: 16 }}>
      <div className="wrap">
        <div className="glass glass-strong" style={{ borderRadius: 999, padding: '12px 16px 12px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <Link href="/" aria-label="BioSense AirCare home" style={{ display: 'inline-flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-horizontal.svg" alt="BioSense AirCare" style={{ height: 40, width: 'auto', display: 'block' }} />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className={pathname.startsWith(n.href.split('#')[0]) && n.href.indexOf('#') < 0 ? 'on' : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link className="btn btn-primary nav-cta" href="/quote/" aria-current={quoteCurrent ? 'page' : undefined}>
              Request a Quote
              {count > 0 && <span className="qbadge" aria-label="items in quote list">{count}</span>}
            </Link>
            <Link className="nav-cart" href="/quote/" aria-label="Quote list">
              <IconCart size={22} />
              {count > 0 && <span className="qbadge" aria-hidden="true">{count}</span>}
            </Link>
            <button className="nav-burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              <IconMenu size={22} />
            </button>
          </div>
        </div>
        {open && (
          <div className="nav-sheet-wrap">
            <div className="glass glass-strong nav-sheet">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
              ))}
              <Link className="btn btn-primary" href="/quote/" style={{ marginTop: 8 }} onClick={() => setOpen(false)}>
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ position: 'relative', paddingBlock: '24px 48px' }}>
      <div className="wrap">
        <div className="glass" style={{ padding: '40px 40px 28px', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/logo-horizontal.svg" alt="BioSense AirCare" style={{ height: 44, width: 'auto', display: 'block' }} />
              <p style={{ fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontSize: 24, fontWeight: 600, color: 'var(--teal-700)' }}>{SITE.caption}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 15, maxWidth: 420, minWidth: 0, color: 'var(--ink-2)' }}>
              <p style={{ fontWeight: 600, color: 'var(--ink)' }}>{SITE.name}</p>
              <p>GST {SITE.gst}</p>
              <p>{SITE.address}</p>
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '8px 32px', paddingTop: 24, borderTop: '1px solid rgba(15,23,42,0.1)', fontSize: 14, color: 'var(--ink-3)' }}>
            <p>© 2026 {SITE.name}</p>
            <p>{SITE.trademark}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="page" id="top">
      <Liquid />
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
