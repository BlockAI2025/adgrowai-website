import Link from 'next/link';
import styles from './BlogPost.module.css';

const BACK_HREF = '/about#blog';

/**
 * Layout for a blog article: back link, category and date, title, then the
 * article. Inside, write plain <h2>, <p> and <blockquote> — they're styled
 * here; the module's other classes cover the richer blocks.
 *
 * @param {object} post  An entry from content/posts.js
 * @param {React.ReactNode} title  The headline, so part of it can be highlighted
 */
export default function BlogPost({ post, title, children }) {
  return (
    <main>
      <article className={styles.article}>
        <div className={styles.column}>
          <Link href={BACK_HREF} className={styles.back}>← BACK TO BLOG</Link>
          <header className={styles.header}>
            <span className={styles.meta}>
              <span className="accent">{post.category}</span>
              <span>·</span>
              <span>{post.date}</span>
            </span>
            <h1 className={`display ${styles.title}`}>{title}</h1>
          </header>
          {children}
          <Link href={BACK_HREF} className={`${styles.back} ${styles.backBottom}`}>← BACK TO BLOG</Link>
        </div>
      </article>
    </main>
  );
}
