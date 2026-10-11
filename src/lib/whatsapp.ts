import { SITE } from './config';
import type { QuoteItem } from './quote';

export function buildMessage(items: QuoteItem[], name: string, phone: string, org: string): string {
  const tass = items.filter((i) => i.kind !== 'svc');
  const svc = items.filter((i) => i.kind === 'svc');
  const lines: string[] = [];
  let n = 0;
  lines.push(tass.length ? "Hello BioSense AirCare, I'd like a quotation for:" : 'Hello BioSense AirCare,');
  tass.forEach((i) => lines.push(`${++n}. ${i.name}, Qty ${i.qty}`));
  if (svc.length) {
    lines.push('Service request:');
    svc.forEach((i) => lines.push(`${++n}. ${i.name}, Qty ${i.qty}`));
  }
  lines.push(`Name: ${name.trim() || '...'}`);
  lines.push(`Phone: ${phone.trim() || '...'}`);
  lines.push(`Company / Location: ${org.trim() || '...'}`);
  return lines.join('\n');
}

export const waLink = (message?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
