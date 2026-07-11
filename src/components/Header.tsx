import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faBriefcase,
  faCode,
  faDesktop,
  faEnvelope,
  faGraduationCap,
  faMoon,
  faScrewdriverWrench,
  faSun,
  faXmark,
  faShieldDog
} from '@fortawesome/free-solid-svg-icons';
import { pick } from './AppContext';
import { strings } from '../data/resume';

interface HeaderProps {
  en: boolean;
  isDark: boolean;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

const NAV: { href: string; key: keyof typeof strings.nav; icon: IconDefinition }[] = [
  { href: '#experience', key: 'experience', icon: faBriefcase },
  { href: '#education', key: 'education', icon: faGraduationCap },
  { href: '#projects', key: 'projects', icon: faCode },
  { href: '#skills', key: 'skills', icon: faScrewdriverWrench },
  { href: '#contact', key: 'contact', icon: faEnvelope },
];

const seg = (active: boolean) =>
  `rounded-full px-2.5 py-0.75 font-mono text-[11px] font-semibold ${
    active ? 'bg-surface text-ink' : 'bg-transparent text-ink-3'
  }`;

export default function Header({ en, isDark, onToggleLang, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  // When the top row runs out of room, fold the language + theme controls into the menu.
  const [compact, setCompact] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLElement>(null);
  // Width at which we last collapsed; only re-expand once we've grown clearly past it.
  const collapseWidth = useRef(0);

  // Collapse when the row overflows, expand again when there's room to spare.
  useLayoutEffect(() => {
    const el = rowRef.current;
    if (!el || compact) return;
    if (el.scrollWidth > el.clientWidth + 1) {
      collapseWidth.current = el.clientWidth;
      setCompact(true);
    }
  }, [compact, en]);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      setCompact((prev) => {
        if (!prev) return el.scrollWidth > el.clientWidth + 1 ? (collapseWidth.current = el.clientWidth, true) : false;
        return el.clientWidth <= collapseWidth.current + 64;
      });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Close the mobile menu on Escape or a click outside the header.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onDown);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className="fixed top-3 right-4 left-4 z-50">
      <div className="relative mx-auto max-w-290 rounded-[18px] border border-line bg-nav shadow-soft backdrop-blur-[14px]">
        <nav ref={rowRef} className="flex items-center gap-4 px-4 py-2 max-[640px]:px-3.5">
          <a href="#about" className="flex shrink-0 items-center gap-2.5 no-underline">
            <span className="flex h-8.5 w-8.5 items-center justify-center rounded-[10px] bg-accent-soft text-[20px] text-accent-tx">
              <FontAwesomeIcon icon={faShieldDog} />
            </span>
            <span className="font-display text-[17px] font-bold tracking-[-0.01em] whitespace-nowrap text-ink">Pemapol S.</span>
          </a>

          <div className="flex flex-1 flex-wrap items-center justify-end gap-x-5.5 gap-y-1.5 max-[640px]:hidden">
            {NAV.map(({ href, key }) => (
              <a
                key={key}
                href={href}
                className="text-[14.5px] font-medium text-ink-2 no-underline hover:text-accent-tx"
              >
                {pick(strings.nav[key], en)}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2.5 max-[640px]:flex-1 max-[640px]:justify-end">
            {!compact && (
              <button
                type="button"
                onClick={onToggleLang}
                aria-label={en ? 'Switch to Thai' : 'Switch to English'}
                className="inline-flex cursor-pointer rounded-full border border-line bg-surface2 p-0.75"
              >
                <span className={seg(en)}>EN</span>
                <span className={seg(!en)}>TH</span>
              </button>
            )}

            {!compact && (
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                aria-pressed={isDark}
                className="flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-line bg-surface2 text-[14px] text-ink-2 hover:text-accent-tx"
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
              </button>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="hidden h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-line bg-surface2 text-[14px] text-ink-2 hover:text-accent-tx max-[640px]:inline-flex"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="absolute inset-x-2 top-full mt-2 hidden flex-col gap-0.5 rounded-[14px] border border-line bg-surface p-2 shadow-soft-lg max-[640px]:flex"
          >
            {NAV.map(({ href, key, icon }) => (
              <a
                key={key}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 rounded-[10px] px-3 py-2.5 text-[15px] font-medium text-ink-2 no-underline hover:bg-surface2 hover:text-accent-tx"
              >
                <FontAwesomeIcon icon={icon} className="w-4 text-[14px] text-accent-tx" />
                {pick(strings.nav[key], en)}
              </a>
            ))}

            {compact && (
            <div className="mt-1 flex items-center justify-between gap-3 border-t border-line px-3 pt-3">
              <button
                type="button"
                onClick={onToggleLang}
                aria-label={en ? 'Switch to Thai' : 'Switch to English'}
                className="inline-flex cursor-pointer rounded-full border border-line bg-surface2 p-0.75"
              >
                <span className={seg(en)}>EN</span>
                <span className={seg(!en)}>TH</span>
              </button>

              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle theme"
                aria-pressed={isDark}
                className="flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full border border-line bg-surface2 text-[14px] text-ink-2 hover:text-accent-tx"
              >
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
              </button>
            </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
