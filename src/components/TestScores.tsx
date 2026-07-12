import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { pick, useApp } from './AppContext';
import Section from './Section';
import { strings, testScores } from '../data/resume';

export default function TestScores() {
  const { en } = useApp();

  return (
    <Section id="test-scores" kicker="~/test-scores" icon={faRankingStar} accent="teal" title={pick(strings.sections.testScores, en)}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-3.5">
        {testScores.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start gap-2.5 rounded-[14px] border border-line bg-surface px-5 py-4.5 shadow-soft"
          >
            <h3 className="font-display text-[16.5px] font-bold leading-[1.3] text-ink">
              {pick(item.title, en)}
            </h3>
            <p className="flex items-baseline gap-1.5">
              <span className="font-display text-[30px] font-bold leading-none text-accent-tx">
                {item.score}
              </span>
              <span className="font-mono text-[13px] font-medium text-ink-3">{item.scale}</span>
            </p>
            {item.breakdown && (
              <div className="flex w-full flex-col gap-1.5 border-t border-line pt-2.5">
                {item.breakdown.map((b, i) => (
                  <div key={i} className="flex items-center justify-between gap-3 text-[13.5px]">
                    <span className="text-ink-2">{pick(b.label, en)}</span>
                    <span className="font-mono font-semibold text-ink">{b.value}</span>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-0.5 font-mono text-[11px] tracking-[0.04em] text-ink-3">
              {pick(item.date, en)}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
