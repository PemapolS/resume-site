import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faEnvelope, faLocationDot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { pick, useApp } from './AppContext';
import { strings, heroStats } from '../data/resume';

const SHOW_PHOTO = true;

// Colored top-accent per stat card — previews the section palette in the hero.
const STAT_ACCENTS = ['--c-blue', '--c-teal', '--c-violet', '--c-amber'];

export default function Hero() {
  const { en, openEmail } = useApp();

  return (
    <section id="about" className="relative scroll-mt-22.5 overflow-hidden">
      {SHOW_PHOTO && (
        <>
          <div className="hero-photo-bg absolute inset-y-0 right-0 w-[min(760px,60vw)] max-[820px]:hidden" />
          <div className="hero-fade absolute inset-y-0 right-0 w-[min(760px,60vw)] max-[820px]:hidden" />

          {/* Mobile: full-width photo at the top, fading into the background. */}
          <div className="relative hidden h-[min(52vh,420px)] max-[820px]:block">
            <div className="hero-photo-bg-mobile absolute inset-0" />
            <div className="hero-fade-mobile absolute inset-0" />
          </div>
        </>
      )}

      <div className="relative z-1 mx-auto max-w-290 px-6 pt-37 pb-10 max-[900px]:px-5.5 max-[900px]:pt-33 max-[900px]:pb-9 max-[820px]:pt-6 max-[640px]:px-4.5 max-[640px]:pb-7">
        <div className="max-w-165">
          <p className="mb-3.5 font-mono text-[13px] font-medium text-ink-3">
            <strong className="font-semibold text-accent-tx">pemapol@bkk</strong>:~$ whoami
          </p>
          <h1 className="font-display text-[clamp(34px,8vw,68px)] leading-[1.02] font-extrabold tracking-[-0.02em] text-ink wrap-break-word">
            Pemapol
            <br />
            Sripratipbundit
          </h1>
          <h2 className="mt-4 text-[clamp(17px,3vw,21px)] font-medium text-ink-2">
            {pick(strings.hero.subtitle, en)}
          </h2>
          <p className="mt-4.5 max-w-155 text-[16.5px] leading-[1.75] text-ink-2 text-pretty max-[640px]:text-[15.5px]">
            {pick(strings.hero.intro, en)}
          </p>

          <div className="mt-5.5 flex flex-wrap items-center gap-x-5.5 gap-y-2 font-mono text-[13px] text-ink-2">
            <span className="inline-flex items-center gap-1.5 text-ink-3">
              <FontAwesomeIcon icon={faLocationDot} />
              bangkok.th
            </span>
            <button
              type="button"
              onClick={openEmail}
              className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent p-0 font-mono text-[13px] text-ink-2 underline decoration-accent-line decoration-2 underline-offset-[3px] hover:text-accent-tx"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {pick(strings.hero.emailLabel, en)}
            </button>
            <a
              href="https://linkedin.com/in/pemapol"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              linkedin.com/in/pemapol
            </a>
            <a
              href="https://github.com/PemapolS"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              <FontAwesomeIcon icon={faGithub} />
              github.com/PemapolS
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2.5 rounded-xl bg-accent px-6 py-3.25 text-[15.5px] font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-accent-hover hover:text-white max-[640px]:flex-1 max-[640px]:justify-center"
            >
              {pick(strings.hero.viewExperience, en)}
              <FontAwesomeIcon icon={faArrowDown} className="text-[12px]" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-xl border border-line-strong bg-surface px-6 py-3.25 text-[15.5px] font-semibold text-ink no-underline transition hover:-translate-y-0.5 hover:border-accent-line max-[640px]:flex-1 max-[640px]:justify-center"
            >
              {pick(strings.hero.getInTouch, en)}
              <FontAwesomeIcon icon={faPaperPlane} className="text-[12px]" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3 max-[900px]:mt-10 max-[640px]:grid-cols-2 max-[640px]:gap-2.5 max-[380px]:grid-cols-1">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              style={{ borderTop: `3px solid var(${STAT_ACCENTS[i % STAT_ACCENTS.length]})` }}
              className="rounded-[14px] border border-line bg-surface px-5 py-4.5 shadow-soft max-[640px]:px-4 max-[640px]:py-3.5"
            >
              <p className="font-display text-[27px] font-bold tracking-[-0.01em] text-ink">
                {stat.value}
                {stat.suffix && <span className="text-[15px] font-semibold text-ink-3">{stat.suffix}</span>}
              </p>
              <p className="mt-1.5 text-[13px] text-ink-2">{pick(stat.label, en)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
