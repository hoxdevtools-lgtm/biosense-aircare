import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/manrope';
import { QuoteProvider } from '@/lib/quote';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'BioSense AirCare | Aircare equipment sales and service, Pune', template: '%s | BioSense AirCare' },
  description:
    'BioSense AirCare Pvt Ltd, Pune: temperature and relative-humidity specialists. TASS ceiling-mounted dehumidifiers and Super Dry service. Protecting what matters most.',
  icons: { icon: '/brand/favicon.svg' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F5F9FC' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <QuoteProvider>
          <SiteShell>{children}</SiteShell>
        </QuoteProvider>
      </body>
    </html>
  );
}
