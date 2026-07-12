import { strings } from '../data/resume';

interface DetailsToggleProps {
  open: boolean;
  /** Overrides the collapsed-state label (default "+ details"). */
  label?: string;
}

/** The mono "+ details" / "− hide" affordance shared by collapsible cards. */
export default function DetailsToggle({ open, label }: DetailsToggleProps) {
  return (
    <button
      type="button"
      aria-hidden="true"
      tabIndex={-1}
      className="cursor-pointer border-none bg-transparent py-1 font-mono text-[12px] font-semibold text-accent-tx hover:text-accent-hover"
    >
      {open ? strings.toggle.hide : (label ?? strings.toggle.details)}
    </button>
  );
}
