import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
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
              email is still the easiest way to reach me.
            </p>
            <SocialLinks />
          </div>
        </section>
      </main>
    </div>
  );
}
