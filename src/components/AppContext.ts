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
