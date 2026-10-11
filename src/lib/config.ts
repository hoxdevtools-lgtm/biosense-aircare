export const SITE = {
  name: 'BioSense AirCare Pvt Ltd',
  caption: 'Protecting what matters most',
  headline: "World's best aircare equipment sales and service",
  gst: '27AANCB6647A1ZN',
  address: '#1382, 3rd Floor, Raji Nivas, Phursungi, Pune – 412308, Maharashtra, India',
  phones: [
    { label: '+91 9175428563', tel: '+919175428563' },
    { label: '+91 9175164765', tel: '+919175164765' },
  ],
  email: 'biosenseaircare@outlook.com',
  whatsappNumber: '919175428563',
  trademark: 'Super Dry® is a trademark of its respective owner.',
} as const;

export const QUOTE_STORAGE_KEY = 'bsac-quote-v1';
export const QUOTE_MAX_LINES = 20;
export const QUOTE_MAX_QTY = 99;

export const NAV = [
  { href: '/products/', label: 'Products' },
  { href: '/products/#service', label: 'Service & Support' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
] as const;
