import { faFilePdf, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { pick, formatDate, useApp } from './AppContext';
import Section from './Section';
import CollapsibleCard from './CollapsibleCard';
import DetailsToggle from './DetailsToggle';
import CardLink from './CardLink';
import { strings, education } from '../data/resume';
import type { EducationItem } from '../data/resume';

function EduHead({ item }: { item: EducationItem }) {
  const { en } = useApp();
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5">
      <div className="min-w-0">
        <h3 className="font-display text-[17px] font-bold text-ink">{pick(item.title, en)}</h3>
        <p className="mt-0.75 text-[14px] text-ink-2">{pick(item.org, en)}</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-2.5 max-[640px]:w-full">
        <span className="font-mono text-[12px] text-ink-3">{formatDate(item.dates, en)}</span>
        <span className="rounded-full border border-accent-line bg-accent-soft px-3.5 py-1.75 font-mono text-[13px] font-bold tracking-[0.06em] text-accent-tx">
          {pick(item.badge, en)}
        </span>
      </div>
    </div>
  );
}

// Padding-only for collapsible cards (surface comes from CollapsibleCard).
const EDU_PAD = 'px-5 py-4.5 max-[640px]:px-4 max-[640px]:py-3.5';
// Full surface for the static (non-collapsible) high-school card.
const CARD_STATIC = `rounded-[14px] border border-line bg-surface shadow-soft ${EDU_PAD}`;

export default function Education() {
  const { en } = useApp();

  return (
    <Section id="education" kicker="~/education" icon={faGraduationCap} accent="teal" title={pick(strings.sections.education, en)}>
      <div className="flex max-w-250 flex-col gap-3">
        {education.map((item) =>
          item.collapsible ? (
            <CollapsibleCard key={item.id} defaultOpen={item.defaultOpen} className={EDU_PAD}>
              {(open) => (
                <>
                  <EduHead item={item} />
                  <div className="flex flex-wrap items-center gap-4">
                    <DetailsToggle open={open} />
                    {item.link && <CardLink href={item.link} icon={faFilePdf} label="Exchange Report" />}
                  </div>
                  {open &&
                    item.details?.map((d, i) => (
                      <p key={i} className="mt-1.5 text-[14.5px] leading-[1.7] text-ink-2">
                        {pick(d, en)}
                      </p>
                    ))}
                </>
              )}
            </CollapsibleCard>
          ) : (
            <div className={CARD_STATIC} key={item.id}>
              <EduHead item={item} />
            </div>
          )
        )}
      </div>
    </Section>
  );
}
