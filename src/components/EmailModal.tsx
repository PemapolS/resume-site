import { useEffect, useRef } from 'react';
import { pick, useApp } from './AppContext';
import { strings } from '../data/resume';

interface EmailModalProps {
  email: string;
  copied: boolean;
  onClose: () => void;
  onCopy: () => void;
}

export default function EmailModal({ email, copied, onClose, onCopy }: EmailModalProps) {
  const { en } = useApp();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape and move focus into the dialog when it opens.
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-[rgba(10,14,21,0.55)] p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-110 rounded-[18px] border border-line bg-surface p-7 shadow-soft-lg max-[640px]:p-5.5"
        role="dialog"
        aria-modal="true"
        aria-label="Email address"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-line bg-surface2 text-[13px] text-ink-2 hover:text-accent-tx"
        >
          ✕
        </button>
        <p className="mb-1.5 font-mono text-[10px] font-semibold tracking-[0.16em] text-accent-tx">EMAIL</p>
        <p className="mb-4.5 font-mono text-[17px] font-semibold text-ink wrap-anywhere">{email}</p>
        <div className="flex flex-wrap gap-2.5 max-[640px]:gap-2">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center rounded-[10px] bg-accent px-4.5 py-2.5 text-[14px] font-semibold text-white no-underline hover:bg-accent-hover hover:text-white max-[640px]:flex-1 max-[640px]:justify-center"
          >
            {pick(strings.modal.openMail, en)}
          </a>
          <button
            type="button"
            onClick={onCopy}
            className="inline-flex cursor-pointer items-center rounded-[10px] border border-line bg-surface2 px-4.5 py-2.5 text-[14px] font-semibold text-ink hover:border-accent-line max-[640px]:flex-1 max-[640px]:justify-center"
          >
            {copied ? pick(strings.modal.copied, en) : pick(strings.modal.copy, en)}
          </button>
        </div>
      </div>
    </div>
  );
}
