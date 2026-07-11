export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer px-6 pb-7">
      <div className="footer-stripe -mx-6 mb-6.5 h-0.75 opacity-55" />
      <div className="mx-auto flex max-w-290 flex-wrap items-center justify-between gap-4 max-[640px]:gap-2.5">
        <p className="text-[14px] font-medium text-white/90">© {year} Pemapol Sripratipbundit</p>
        <p className="font-mono text-[12px] tracking-[0.18em] text-white/40 max-[640px]:text-[11px] max-[640px]:tracking-[0.12em]">
          BKK — VTBS · 13°41′33″N 100°45′00″E · UTC+07:00
        </p>
      </div>
    </footer>
  );
}
