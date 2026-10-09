/**
 * The "[01] TITLE ──────── aside" row that opens a section.
 *
 * @param {string} index  Shown in brackets, e.g. "01" or "+"
 * @param {'accent'|'warn'} tone  Colour of the index
 * @param {React.ReactNode} aside  Optional link or label after the rule
 * @param {boolean} rule  Draw the horizontal rule
 * @param {boolean} reveal  Fade in on scroll (off when a parent already does)
 */
export default function SectionHeader({ index, title, tone = 'accent', aside, rule = true, reveal = true }) {
  return (
    <div className="section-header" data-reveal={reveal ? '0' : undefined}>
      <span className={tone}>[{index}]</span>
      <span>{title}</span>
      {rule && <span className="section-header__rule" />}
      {aside}
    </div>
  );
}
