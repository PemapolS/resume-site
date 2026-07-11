import { useState } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';

interface CollapsibleCardProps {
  defaultOpen?: boolean;
  /** layout-only utilities (padding / flex); the shared surface is baked in */
  className?: string;
  /** render function receiving the current `open` boolean */
  children: (open: boolean) => ReactNode;
}

/** Shared surface + interaction for every collapsible card, so they're uniform.
 *  The hover border uses the section's accent (`--accent-line` via [data-accent]). */
const SURFACE =
  'cursor-pointer rounded-[14px] border border-line bg-surface shadow-soft transition ' +
  'hover:-translate-y-0.5 hover:shadow-soft-lg hover:[border-color:var(--accent-line)]';

/**
 * A card that toggles its expanded state when clicked anywhere (matching the
 * source design, where the whole card is the affordance). Adds keyboard and
 * ARIA support on top of the original mouse-only behaviour. Callers pass only
 * layout utilities via `className`; the surface styling is shared here.
 */
export default function CollapsibleCard({ defaultOpen = false, className = '', children }: CollapsibleCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen((o) => !o);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    // Ignore key events bubbling up from inner interactive elements (e.g. links).
    if (event.target !== event.currentTarget) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className={`${SURFACE} ${className}`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      {children(open)}
    </div>
  );
}
