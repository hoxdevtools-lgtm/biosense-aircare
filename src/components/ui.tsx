import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function TagConfirm({ children = '[client to confirm]', style }: { children?: ReactNode; style?: CSSProperties }) {
  return <span className="tag-confirm" style={style}>{children}</span>;
}

export function SectionHead({ eyebrow, title, children, as: H = 'h2' }: { eyebrow: string; title: string; children?: ReactNode; as?: 'h1' | 'h2' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 16, maxWidth: 760 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <H className={H === 'h1' ? 'page-title' : 'sec-title'}>{title}</H>
      {children && <p style={{ fontSize: 18, color: 'var(--ink-2)' }}>{children}</p>}
    </div>
  );
}

export function Placeholder({ lines, style }: { lines: string[]; style?: CSSProperties }) {
  return (
    <div className="ph" style={style}>
      {lines.map((l) => <span key={l}>{l}</span>)}
    </div>
  );
}

export function PhotoStage({ src, alt, height, imgSize = '88%', style }: { src: string; alt: string; height: number | string; imgSize?: string; style?: CSSProperties }) {
  return (
    <div className="photo-stage" style={{ height, width: '100%', borderRadius: 14, ...style }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="photo-cut" src={src} alt={alt} style={{ width: imgSize, height: imgSize }} loading="lazy" decoding="async" />
    </div>
  );
}

export function LinkButton({ href, variant = 'primary', children, style, ...rest }: { href: string; variant?: 'primary' | 'glass' | 'wa'; children: ReactNode; style?: CSSProperties } & Omit<React.ComponentProps<'a'>, 'href' | 'style'>) {
  const cls = `btn btn-${variant}`;
  if (/^https?:/.test(href)) return <a className={cls} href={href} style={style} {...rest}>{children}</a>;
  return <Link className={cls} href={href} style={style}>{children}</Link>;
}

export const ICON_TILE_STYLE = (n: number): CSSProperties => ({ width: n, height: n });
