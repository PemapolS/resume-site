import { Fragment } from 'react';
import { faBriefcase, faFilePdf, faAward } from '@fortawesome/free-solid-svg-icons';
import { pick, formatDate, useApp } from './AppContext';
import Section from './Section';
import CollapsibleCard from './CollapsibleCard';
import DetailsToggle from './DetailsToggle';
import CardLink from './CardLink';
import { strings, experience } from '../data/resume';

export default function Experience() {
  const { en } = useApp();

  return (
    <Section id="experience" kicker="~/experience" icon={faBriefcase} accent="blue" title={pick(strings.sections.experience, en)}>
      <div className="max-w-215">
        <div className="grid grid-cols-[92px_28px_minmax(0,1fr)] gap-x-3 max-[640px]:grid-cols-[58px_20px_minmax(0,1fr)] max-[640px]:gap-x-2.5">
          {experience.map((item) => (
            <Fragment key={item.id}>
              <div className="py-4 text-right max-[640px]:py-3.5">
                <p className="font-mono text-[14px] font-semibold whitespace-nowrap text-ink max-[640px]:text-[12.5px]">
                  {formatDate(item.dateMain, en)}
                </p>
                {item.dateSub && (
                  <p className="font-mono text-[12px] text-ink-3 max-[640px]:text-[11px]">{formatDate(item.dateSub, en)}</p>
                )}
              </div>

              <div className="relative flex justify-center">
                <div className="dashed-y absolute inset-y-0 w-0.5" />
                <div
                  className={`relative z-1 mt-5.5 h-3 w-3 rounded-full border-2 ${
                    item.accent ? 'border-accent-soft bg-accent' : 'border-surface bg-ink-3'
                  }`}
                />
              </div>

              <div className="pt-2 pb-4">
                <CollapsibleCard defaultOpen={item.defaultOpen} className="px-4.5 py-3.5">
                  {(open) => (
                    <>
                      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                        <div className="min-w-0">
                          <h3 className="font-display text-[17px] font-bold leading-tight text-ink">
                            {pick(item.title, en)}
                          </h3>
                          <p className="mt-0.5 text-[14px] text-ink-2">{pick(item.org, en)}</p>
                        </div>
                        <span
                          className={`shrink-0 rounded-full px-2.75 py-1.25 font-mono text-[10px] font-semibold tracking-[0.14em] ${
                            item.accent ? 'bg-accent-soft text-accent-tx' : 'bg-surface2 text-ink-2'
                          }`}
                        >
                          {pick(item.tag, en)}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <DetailsToggle open={open} />
                        {item.link && <CardLink href={item.link} icon={faFilePdf} label="Report" />}
                        {item.certLink && <CardLink href={item.certLink} icon={faAward} label="Certification" />}
                      </div>
                      {open && (
                        <ul className="mt-1.5 mb-1 list-disc space-y-1.5 pl-4.5 text-[14.5px] leading-[1.7] text-ink-2 marker:text-ink-3">
                          {item.bullets.map((b, i) => (
                            <li key={i}>{pick(b, en)}</li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </CollapsibleCard>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Section>
  );
}
