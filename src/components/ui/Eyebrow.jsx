/** Small mono label with a blinking dot, shown above page titles. */
export default function Eyebrow({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="dot" />
      {children}
    </span>
  );
}
