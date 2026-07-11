import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { pick, useApp } from './AppContext';
import Section from './Section';
import { strings, languages } from '../data/resume';

export default function Languages() {
  const { en } = useApp();

  return (
    <Section id="languages" kicker="~/languages" icon={faLanguage} accent="cyan" title={pick(strings.sections.languages, en)}>
      <div className="grid max-w-215 grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-3">
        {languages.map((lang) => (
          <div
            key={lang.alt}
            className="flex items-center gap-3.5 rounded-[14px] border border-line bg-surface px-4.5 py-3.5 shadow-soft max-[640px]:px-4 max-[380px]:flex-wrap"
          >
            <img className="h-7 w-9.5 shrink-0 rounded-[5px] border border-line object-cover" src={lang.flag} alt={lang.alt} width="38" height="28" />
            <div className="min-w-0">
              <p className="font-display text-[16px] font-bold text-ink">{pick(lang.name, en)}</p>
              <p className="mt-0.5 text-[13.5px] text-ink-2">{pick(lang.level, en)}</p>
            </div>
            <span
              className={`ml-auto shrink-0 rounded-full px-2.75 py-1.25 font-mono text-[10px] font-semibold tracking-widest max-[380px]:mt-0.5 max-[380px]:ml-0 ${
                lang.accent ? 'bg-accent-soft text-accent-tx' : 'bg-surface2 text-ink-2'
              }`}
            >
              {lang.badge}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
