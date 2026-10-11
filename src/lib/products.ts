import data from '@/data/products.json';

export type Group = 'compact' | 'standard' | 'industrial' | 'tbc';

export interface Product {
  id: string;
  num: string;
  group: Group;
  groupLabel: string;
  use: string;
  cap: string;
  cond: string;
  air: string;
  volt: string;
  power: string;
  noise: string;
  kg: string;
  size: string;
  ref: string;
  dry: string;
  img: string;
}

export const PRODUCTS = data as Product[];

export const GROUP_TABS: { key: 'all' | Group; label: string }[] = [
  { key: 'all', label: 'All models' },
  { key: 'compact', label: 'Compact' },
  { key: 'standard', label: 'Standard' },
  { key: 'industrial', label: 'Industrial' },
  { key: 'tbc', label: 'Group to confirm' },
];

export const GROUP_NOTES: Record<'all' | Group, string> = {
  all: `${PRODUCTS.length} models. Capacity is quoted at 27 °C, 60% RH or at 30 °C, 80% RH. The test condition is shown on every card.`,
  compact: 'Compact, 20 L/day, 200 m³/h. For micro-environments and isolation rooms.',
  standard: 'Standard, 90 to 168 L/day, 900 to 2000 m³/h. For mid-size labs and standard operation theatres.',
  industrial: 'Industrial, 360 to 960 L/day, 3500 to 8500 m³/h. For centralised hospital HVAC and pharma manufacturing.',
  tbc: 'These models are in the supplier datasheets but not in the deck groups. Grouping to be confirmed with the client.',
};

export const SUPER_DRY_SERIES: { key: string; name: string; pos: string; models: [string, string][] }[] = [
  { key: 'SDB', name: 'SDB', pos: 'Entry model, basic functions, hygrometer display', models: [['SDB 151-40', '135 l'], ['SDB 1104-40', '1139 l'], ['SDB 1106-40', '1139 l']] },
  { key: 'SD', name: 'SD', pos: 'Robust design, digital panel, humidity and door alarms', models: [['SD 151-21', '135 l'], ['SD 302-21', '320 l'], ['SD 502-21', '496 l'], ['SD 702-21', '680 l'], ['SD 1104-21', '1139 l'], ['SD 1106-21', '1139 l'], ['SD 1704-21', '1700 l']] },
  { key: 'SDP', name: 'SD+', pos: 'Precision drying, data logger, ethernet, dynamic regeneration', models: [['SD+ 302-22', '320 l'], ['SD+ 1104-22', '1139 l'], ['SD+ 1106-22', '1139 l']] },
  { key: 'HSD', name: 'HSD', pos: 'Extra-fast drying, below 0.5% RH, 15 min recovery', models: [['HSD 1104-52', '1179 l'], ['HSD 1106-52', '1179 l'], ['HSD 1704-52', '1700 l']] },
];

export function productDetailRows(p: Product): { k: string; v: string }[] {
  const rows = [
    { k: 'Capacity', v: `${p.cap} (at ${p.cond})` },
    { k: 'Airflow', v: p.air },
    { k: 'Voltage', v: p.volt },
    { k: 'Power', v: p.power },
    { k: 'Noise', v: p.noise },
    { k: 'Net weight', v: p.kg },
    { k: 'Size (L×W×H)', v: p.size },
    { k: 'Refrigerant', v: p.ref },
    { k: 'Humidity control', v: '40% to 95% RH' },
    { k: 'Working range', v: '5 to 38 °C' },
    { k: '24 V dry contacts', v: p.dry },
    { k: 'Drainage', v: 'Hose' },
  ];
  if (p.use) rows.push({ k: 'Target use', v: p.use });
  return rows;
}
