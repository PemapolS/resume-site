import { faArrowUpRightFromSquare, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { pick, useApp } from './AppContext';
import Section from './Section';
import CollapsibleCard from './CollapsibleCard';
import DetailsToggle from './DetailsToggle';
import CardLink from './CardLink';
import { strings, certifications } from '../data/resume';

export default function Certifications() {
  const { en } = useApp();

  return (
    <Section id="certifications" kicker="~/certifications" icon={faCertificate} accent="amber" title={pick(strings.sections.certifications, en)}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] items-start gap-3.5">
        {certifications.map((item) => (
          <CollapsibleCard key={item.id} className="flex flex-col items-start gap-2 px-5 py-4.5">
            {(open) => (
              <>
                <span className="rounded-full bg-accent-soft px-2.75 py-1.25 font-mono text-[10px] font-semibold tracking-[0.14em] text-accent-tx">
                  {item.badge}
                </span>
                <h3 className="font-display text-[16.5px] font-bold leading-[1.3] text-ink">
                  {pick(item.title, en)}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-ink-2">{pick(item.desc, en)}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <DetailsToggle open={open} />
                  {item.link && (
                    <CardLink href={item.link} icon={faArrowUpRightFromSquare} label="View credential" />
                  )}
                </div>
                {open && (
                  <ul className="m-0 list-disc space-y-1.5 pl-4.5 text-[14px] leading-[1.7] text-ink-2 marker:text-ink-3">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{pick(b, en)}</li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </CollapsibleCard>
        ))}
      </div>
    </Section>
  );
}
