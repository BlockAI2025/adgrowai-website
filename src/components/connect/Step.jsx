import styles from './Step.module.css';

/**
 * One "how it works" step on the Connect page: big number, title and
 * description (children) on the left, the `demo` element on the right.
 */
export default function Step({ number, total = 4, name, title, children, demo }) {
  return (
    <div className={styles.step}>
      <div data-reveal="0" className={styles.copy}>
        <div className={styles.head}>
          <span className={styles.number}>{String(number).padStart(2, '0')}</span>
          <div className={styles.meta}>
            <span className={styles.count}>STEP {number} OF {total}</span>
            <span className={styles.pips}>
              {Array.from({ length: total }, (_, i) => (
                <span key={i} className={styles.pip} data-done={i < number} />
              ))}
            </span>
            <span className={styles.name}>{name}</span>
          </div>
        </div>
        <h2 className={`display ${styles.title}`}>{title}</h2>
        <p className={styles.text}>{children}</p>
      </div>
      {demo}
    </div>
  );
}
