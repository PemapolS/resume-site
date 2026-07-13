import { faCode, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faFigma } from '@fortawesome/free-brands-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { pick, useApp } from './AppContext';
import Section from './Section';
import CollapsibleCard from './CollapsibleCard';
import DetailsToggle from './DetailsToggle';
import CardLink from './CardLink';
import { strings, projects, type LinkIcon } from '../data/resume';

/** Maps a project link's icon key to its Font Awesome icon. */
const LINK_ICONS: Record<LinkIcon, IconDefinition> = {
  pdf: faFilePdf,
  github: faGithub,
  linkedin: faLinkedin,
  figma: faFigma,
};

export default function Projects() {
  const { en } = useApp();

  return (
    <Section id="projects" kicker="~/projects" icon={faCode} accent="violet" title={pick(strings.sections.projects, en)}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] items-start gap-3.5">
        {projects.map((item) => (
          <CollapsibleCard key={item.id} className="flex flex-col items-start gap-2 px-5 py-4.5">
            {(open) => (
              <>
                <p className="font-mono text-[11px] font-semibold tracking-[0.12em] text-ink-3">
                  {pick(item.meta, en)}
                </p>
                <h3 className="font-display text-[17px] font-bold leading-[1.3] text-ink">
                  {pick(item.title, en)}
                </h3>
                <p className="text-[14px] text-ink-2">{pick(item.role, en)}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line bg-surface2 px-2.25 py-0.75 font-mono text-[11px] font-medium text-ink-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <DetailsToggle open={open} label={item.repos ? strings.toggle.detailsSource : undefined} />
                  {item.link && (
                    <CardLink href={item.link.href} icon={LINK_ICONS[item.link.icon]} label={item.link.label} />
                  )}
                </div>
                {open && (
                  <>
                    <ul className="m-0 list-disc space-y-1.5 pl-4.5 text-[14.5px] leading-[1.7] text-ink-2 marker:text-ink-3">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{pick(b, en)}</li>
                      ))}
                    </ul>
                    {item.repos && (
                      <div className="w-full border-t border-line pt-2.5">
                        <p className="mb-1.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-ink-3">
                          {pick(strings.projects.repos, en)}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                          {item.repos.map((repo) => (
                            <CardLink key={repo.href} href={repo.href} icon={faGithub} label={repo.label} />
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </CollapsibleCard>
        ))}
      </div>
    </Section>
  );
}
