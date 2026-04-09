import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { withAssetBase } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>hi, i&apos;m liam van.</p>
              <h1>Cloud, AI, and full-stack engineering.</h1>
              <p className={styles.summary}>
                Liam is a software engineer on Oracle&apos;s GCP Integration
                team, working across backend systems, release readiness,
                AI-assisted tooling, and production issues.
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
            <div className={styles.heroRail}>
              <div className={styles.heroPortrait}>
                <div className={styles.photoFrame}>
                  <Image
                    src={withAssetBase("/images/hero-portrait.jpeg")}
                    alt="Portrait of Liam outdoors"
                    fill
                    className={styles.coverImage}
                    priority
                  />
                </div>
                <div className={styles.polaroidAccent}>
                  <div className={styles.polaroidInner}>
                    <Image
                      src={withAssetBase("/images/polaroid-friends.jpeg")}
                      alt="Polaroid photo of Liam with friends"
                      fill
                      className={styles.coverImage}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.heroCard}>
                <p className={styles.cardLabel}>Now</p>
                <h2>Oracle x Google Cloud</h2>
                <p>
                  Building and validating OCI database workflows on GCP with a
                  focus on reliability, tooling, and production readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.linkGrid}>
            <a className={styles.linkCard} href="./work/">
              <p className={styles.sectionEyebrow}>Work</p>
              <h2>Selected experience, projects, and current focus.</h2>
            </a>
            <a className={styles.linkCard} href="./hobbies/">
              <p className={styles.sectionEyebrow}>Hobbies</p>
              <h2>Photography, UGA football, and a little pool.</h2>
            </a>
            <a className={styles.linkCard} href="./contact/">
              <p className={styles.sectionEyebrow}>Contact</p>
              <h2>Reach out by email, GitHub, or LinkedIn.</h2>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
