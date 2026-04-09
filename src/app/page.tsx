import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { withAssetBase } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.kicker}>hi, i&apos;m liam van.</p>
              <h1>i build cloud, ai, and full-stack software.</h1>
              <p className={styles.summary}>
                i&apos;m a software engineer on oracle&apos;s gcp integration
                team, working across backend systems, release readiness,
                ai-assisted tooling, and production issues.
              </p>
              <p className={styles.summary}>
                before that, i built llm-powered product features, search
                experiences, and backend systems in react, nestjs, spring boot,
                and java.
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
                <p className={styles.cardLabel}>now</p>
                <h2>oracle x google cloud</h2>
                <p>
                  building and validating oci database workflows on gcp with a
                  focus on reliability, tooling, and production readiness.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.linkGrid}>
            <a className={styles.linkCard} href="./work/">
              <p className={styles.sectionEyebrow}>work</p>
              <h2>selected experience and projects.</h2>
            </a>
            <a className={styles.linkCard} href="./hobbies/">
              <p className={styles.sectionEyebrow}>hobbies</p>
              <h2>photography, uga football, and pool.</h2>
            </a>
            <a className={styles.linkCard} href="./contact/">
              <p className={styles.sectionEyebrow}>contact</p>
              <h2>reach out by email, github, or linkedin.</h2>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
