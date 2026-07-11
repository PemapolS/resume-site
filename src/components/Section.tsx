import type { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SectionProps {
  id: string;
  kicker: string;
  title: string;
  icon: IconDefinition;
  /** Palette key that tints this section's accent elements. */
  accent: 'blue' | 'teal' | 'violet' | 'amber' | 'green' | 'cyan' | 'rose';
  lead?: string;
  contact?: boolean;
  children: ReactNode;
}

/**
 * Section shell with the mono "~/kicker" eyebrow (decorated with a Font Awesome
 * icon), dashed rule and title used across the design. `accent` re-tints the
 * section's accent tokens (see `[data-accent]` in global.css).
 */
export default function Section({ id, kicker, title, icon, accent, lead, contact = false, children }: SectionProps) {
  return (
    <section
      id={id}
      data-accent={accent}
      className={`mx-auto max-w-290 scroll-mt-22.5 px-6 pt-14 pb-2 max-[900px]:px-5.5 max-[900px]:pt-12 max-[640px]:px-4.5 max-[640px]:pt-11 ${
        contact ? 'pb-20' : ''
      }`}
    >
      <div className="mb-2.5 flex items-center gap-2.5">
        <FontAwesomeIcon icon={icon} className="text-[13px] text-accent-tx" />
        <p className="font-mono text-[12px] font-semibold tracking-[0.18em] text-accent-tx">{kicker}</p>
        <div className="dashed-x h-0.5 w-35 max-[640px]:w-22.5" />
      </div>
      <h2 className="mb-7 text-[34px] font-bold tracking-[-0.02em] text-ink max-[900px]:mb-6 max-[900px]:text-[30px] max-[640px]:text-[27px]">
        {title}
      </h2>
      {lead && <p className="mb-6 max-w-155 text-[16px] text-ink-2">{lead}</p>}
      {children}
    </section>
  );
}
