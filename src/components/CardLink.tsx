import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CardLinkProps {
  href: string;
  icon: IconDefinition;
  label: string;
}

/**
 * An external link rendered inside a collapsible card. `stopPropagation` keeps a
 * click from also toggling the card's expanded state.
 */
export default function CardLink({ href, icon, label }: CardLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1.5 py-1 font-mono text-[12px] font-semibold text-accent-tx no-underline hover:text-accent-hover"
    >
      <FontAwesomeIcon icon={icon} />
      {label}
    </a>
  );
}
