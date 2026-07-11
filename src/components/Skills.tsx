import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { pick, useApp } from './AppContext';
import Section from './Section';
import { strings, skills } from '../data/resume';

export default function Skills() {
  const { en } = useApp();

  return (
    <Section id="skills" kicker="~/skills" icon={faScrewdriverWrench} accent="green" title={pick(strings.sections.skills, en)}>
      <div className="flex max-w-215 flex-col gap-4.5">
        {skills.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-ink-3">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-surface px-3.25 py-1.5 text-[13.5px] font-medium text-ink-2"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
