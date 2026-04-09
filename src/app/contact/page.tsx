import { SiteHeader } from "@/components/SiteHeader";
import styles from "../page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/contact" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>contact</p>
            <h1>say hello.</h1>
            <p className={styles.summary}>
              the easiest way to reach me is by email. github and linkedin are
              below too.
            </p>
            <div className={styles.inlineLinks}>
              <a className={styles.primary} href="mailto:liamvanpj@gmail.com">
                email
              </a>
              <a
                className={styles.secondary}
                href="https://github.com/SpeciLiam"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
              <a
                className={styles.secondary}
                href="https://www.linkedin.com/in/liam-van"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
