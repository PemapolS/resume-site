import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { pick, useApp } from './AppContext';
import Section from './Section';
import { strings, contactCards } from '../data/resume';

const CARD_BASE = 'block w-full rounded-[14px] border border-line bg-surface px-4 py-3.5 text-left no-underline';
const CARD_INTERACTIVE = 'transition hover:-translate-y-0.75 hover:border-accent-line hover:shadow-soft';
const LABEL = 'mb-1 font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-tx';
const VALUE = 'text-[14.5px] font-semibold text-ink wrap-anywhere';

const BRAND: Record<string, IconDefinition> = { linkedin: faLinkedin, github: faGithub };

function CardIcon({ icon }: { icon: IconDefinition }) {
  return <FontAwesomeIcon icon={icon} className="mb-2 text-[17px] text-accent-tx" />;
}

export default function Contact() {
  const { en, openEmail } = useApp();

  return (
    <Section
      id="contact"
      kicker="~/contact"
      icon={faEnvelope}
      accent="rose"
      title={pick(strings.sections.contact, en)}
      lead={pick(strings.contact.lead, en)}
      contact
    >
      <div className="grid max-w-215 grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-3">
        <button type="button" onClick={openEmail} className={`${CARD_BASE} ${CARD_INTERACTIVE} cursor-pointer`}>
          <CardIcon icon={faEnvelope} />
          <p className={LABEL}>EMAIL</p>
          <p className={VALUE}>{pick(strings.contact.reveal, en)}</p>
        </button>

        {contactCards.map((card) => (
          <a key={card.kind} href={card.href} target="_blank" rel="noreferrer" className={`${CARD_BASE} ${CARD_INTERACTIVE}`}>
            <CardIcon icon={BRAND[card.kind]} />
            <p className={LABEL}>{card.label}</p>
            <p className={VALUE}>{card.value}</p>
          </a>
        ))}

        <div className={CARD_BASE}>
          <CardIcon icon={faLocationDot} />
          <p className={LABEL}>LOCATION</p>
          <p className={VALUE}>{pick(strings.contact.location, en)}</p>
        </div>
      </div>
    </Section>
  );
}
