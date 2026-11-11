/** 2:3 ambient grid, 2:4 indigo bloom, 2:5 teal bloom. Decorative only. */
export function SlideBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="ambient-grid absolute inset-0" />
      <div className="bloom-primary absolute top-[-160px] left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full blur-[140px]" />
      <div className="bloom-teal absolute right-10 bottom-[-160px] h-[350px] w-[500px] rounded-full blur-[130px]" />
    </div>
  );
}