import { SiteHeader } from "@/components/SiteHeader";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/contact" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>contact</p>
            <h1>Say hello.</h1>
            <p className={styles.summary}>
              The easiest way to reach Liam is by email. GitHub and LinkedIn
              are below too.
            </p>
            <div className={styles.ctas}>
              <a className={styles.primary} href="mailto:liamvanpj@gmail.com">
                Email Liam
              </a>
              <a
                className={styles.secondary}
                href="https://github.com/SpeciLiam"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className={styles.secondary}
                href="https://www.linkedin.com/in/liam-van"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
