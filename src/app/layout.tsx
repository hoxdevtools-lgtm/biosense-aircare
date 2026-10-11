import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { QuoteProvider } from '@/lib/quote';
import { SiteShell } from '@/components/SiteShell';
import './globals.css';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'BioSense AirCare | Aircare equipment sales and service, Pune', template: '%s | BioSense AirCare' },
  description:
    'BioSense AirCare Pvt Ltd, Pune: temperature and relative-humidity specialists. TASS ceiling-mounted dehumidifiers and Super Dry service. Protecting what matters most.',
  icons: { icon: '/brand/favicon.svg' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#F5F9FC' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <QuoteProvider>
          <SiteShell>{children}</SiteShell>
        </QuoteProvider>
      </body>
    </html>
  );
}
