import type { ReactNode } from 'react';

function Svg({ size = 24, sw = 1.6, children }: { size?: number; sw?: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

type P = { size?: number; sw?: number };

export const IconFlask = (p: P) => <Svg {...p}><path d="M9 3h6M10 3v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-2.5L14 9V3" /><path d="M7.5 15h9" /></Svg>;
export const IconGrid = (p: P) => <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></Svg>;
export const IconPlus = (p: P) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></Svg>;
export const IconPulse = (p: P) => <Svg {...p}><path d="M3 12h4l2-6 4 12 2-6h6" /></Svg>;
export const IconHome = (p: P) => <Svg {...p}><path d="M3 11l9-7 9 7v9H3z" /><path d="M9 20v-6h6v6" /></Svg>;
export const IconBolt = (p: P) => <Svg {...p}><path d="M13 2L5 14h6l-1 8 8-12h-6z" /></Svg>;
export const IconLink = (p: P) => <Svg {...p}><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="14" width="6" height="6" rx="1" /><path d="M10 7h4a2 2 0 0 1 2 2v5" /></Svg>;
export const IconPin = (p: P) => <Svg {...p}><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>;
export const IconPhone = (p: P) => <Svg {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></Svg>;
export const IconMail = (p: P) => <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></Svg>;
export const IconThermo = (p: P) => <Svg {...p}><path d="M10 14.8V5a2 2 0 1 1 4 0v9.8a4 4 0 1 1-4 0z" /><path d="M12 9v7" /></Svg>;
export const IconWifi = (p: P) => <Svg {...p}><path d="M5 12.5a10 10 0 0 1 14 0M8.2 15.7a5.5 5.5 0 0 1 7.6 0" /><circle cx="12" cy="19" r="1" /><path d="M2 9.2a14.5 14.5 0 0 1 20 0" /></Svg>;
export const IconCart = (p: P) => <Svg {...p}><path d="M3 4h2.2l2 11h10.6l2-8H6.4" /><circle cx="9" cy="19.5" r="1.4" /><circle cx="17" cy="19.5" r="1.4" /></Svg>;
export const IconClose = (p: P) => <Svg {...p}><path d="M6 6l12 12M18 6L6 18" /></Svg>;
export const IconMenu = (p: P) => <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>;
export const IconSearch = (p: P) => <Svg {...p}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></Svg>;
export const IconDroplet = (p: P) => <Svg {...p}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></Svg>;
export const IconRange = (p: P) => <Svg {...p}><path d="M4 18V6M4 12h16M20 18V6" /></Svg>;
export const IconCube = (p: P) => <Svg {...p}><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" /></Svg>;
export const IconCustom = (p: P) => <Svg {...p}><path d="M4 7h10M18 7h2M4 17h2M10 17h10" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></Svg>;
export const IconWrench = (p: P) => <Svg {...p}><path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8z" /><path d="M5 19l-2 2" /></Svg>;

export function IconWhatsApp({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.7-5A8.5 8.5 0 1 1 8 19.3L3 21z" />
      <path d="M9 9.5c.5 2 2.5 4 4.5 4.5l1.3-1.3-2-1-.8.8c-.8-.4-1.6-1.2-2-2l.8-.8-1-2L9 9.5z" />
    </svg>
  );
}
