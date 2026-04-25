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
              always open to interesting conversations. email is still the
              easiest way to reach me.
            </p>
            <div className={styles.contactGrid}>
              <a className={styles.contactCard} href="mailto:liamvanpj@gmail.com">
                <p>email</p>
                <span>liamvanpj@gmail.com</span>
              </a>
              <a
                className={styles.contactCard}
                href="https://github.com/SpeciLiam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>github</p>
                <span>SpeciLiam</span>
              </a>
              <a
                className={styles.contactCard}
                href="https://www.linkedin.com/in/liam-van"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>linkedin</p>
                <span>liam-van</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
