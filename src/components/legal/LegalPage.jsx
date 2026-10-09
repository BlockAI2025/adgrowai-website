import Eyebrow from '@/components/ui/Eyebrow';
import styles from './LegalPage.module.css';

/**
 * Layout for the legal pages: a hero with the title and dates, then the
 * document. Inside, write plain <h2>, <p>, <ul> and <a> — they're styled here.
 */
export default function LegalPage({ title, dates, children }) {
  return (
    <main>
      <section className="page-hero grid-bg">
        <div className="container stack gap-28">
          <Eyebrow>LEGAL</Eyebrow>
          <h1 className="display display--page">{title}</h1>
          <div className={styles.dates}>
            {dates.map((date) => (
              <span key={date}>{date}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--md">
        <div className="container">
          <article className={styles.document}>{children}</article>
        </div>
      </section>
    </main>
  );
}
