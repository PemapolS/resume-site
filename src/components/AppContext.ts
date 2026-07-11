import { createContext, useContext } from 'react';
import type { Bilingual } from '../data/resume';

export interface AppContextValue {
  /** current language is English (false → Thai) */
  en: boolean;
  /** reveal the email modal */
  openEmail: () => void;
}

export const AppContext = createContext<AppContextValue>({ en: true, openEmail: () => {} });

export const useApp = (): AppContextValue => useContext(AppContext);

/** Resolve a bilingual `{ en, th }` field against the active language. */
export const pick = (field: Bilingual, en: boolean): string => (en ? field.en : field.th);

/** English month abbreviations (and "NOW") → Thai, matching the abbreviations used in project dates. */
const MONTH_TH: Record<string, string> = {
  JAN: 'ม.ค.', FEB: 'ก.พ.', MAR: 'มี.ค.', APR: 'เม.ย.', MAY: 'พ.ค.', JUN: 'มิ.ย.',
  JUL: 'ก.ค.', AUG: 'ส.ค.', SEP: 'ก.ย.', OCT: 'ต.ค.', NOV: 'พ.ย.', DEC: 'ธ.ค.',
  NOW: 'ปัจจุบัน',
};

/**
 * Localize a plain date string (e.g. `JUN–JUL`, `JUL–DEC 2025`, `2023–NOW`) to the
 * active language by translating month tokens. English is returned unchanged.
 */
export const formatDate = (text: string, en: boolean): string =>
  en ? text : text.replace(/\b(JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC|NOW)\b/g, (m) => MONTH_TH[m]);
