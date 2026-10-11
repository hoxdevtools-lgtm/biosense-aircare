'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { QUOTE_MAX_LINES, QUOTE_MAX_QTY, QUOTE_STORAGE_KEY } from './config';

export interface QuoteItem {
  id: string;
  kind: 'tass' | 'svc';
  name: string;
  img: string | null;
  qty: number;
}

interface QuoteCtx {
  items: QuoteItem[];
  count: number;
  full: boolean;
  qtyOf: (id: string) => number;
  add: (item: Omit<QuoteItem, 'qty'>) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
}

const Ctx = createContext<QuoteCtx | null>(null);

function load(): QuoteItem[] {
  try {
    const raw = window.localStorage.getItem(QUOTE_STORAGE_KEY);
    const v = raw ? JSON.parse(raw) : [];
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [full, setFull] = useState(false);

  useEffect(() => {
    setItems(load());
    const onStorage = (e: StorageEvent) => {
      if (e.key === QUOTE_STORAGE_KEY) setItems(load());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  const commit = useCallback((next: QuoteItem[]) => {
    setItems(next);
    try {
      window.localStorage.setItem(QUOTE_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* storage blocked: the list lives in memory only */
    }
  }, []);

  const value = useMemo<QuoteCtx>(
    () => ({
      items,
      count: items.reduce((a, i) => a + i.qty, 0),
      full,
      qtyOf: (id) => items.find((i) => i.id === id)?.qty ?? 0,
      add: (item) => {
        const idx = items.findIndex((i) => i.id === item.id);
        if (idx >= 0) {
          const next = items.slice();
          next[idx] = { ...next[idx], qty: Math.min(QUOTE_MAX_QTY, next[idx].qty + 1) };
          setFull(false);
          commit(next);
        } else if (items.length >= QUOTE_MAX_LINES) {
          setFull(true);
        } else {
          setFull(false);
          commit([...items, { ...item, qty: 1 }]);
        }
      },
      setQty: (id, qty) =>
        commit(items.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(QUOTE_MAX_QTY, qty)) } : i))),
      remove: (id) => {
        setFull(false);
        commit(items.filter((i) => i.id !== id));
      },
      clear: () => {
        setFull(false);
        commit([]);
      },
    }),
    [items, full, commit],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useQuote(): QuoteCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error('useQuote must be used inside QuoteProvider');
  return c;
}
