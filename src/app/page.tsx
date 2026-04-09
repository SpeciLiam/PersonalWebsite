import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { withAssetBase, withBasePath } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/" />
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.introLead}>hi, i&apos;m</p>
              <h1 className={styles.introName}>liam van.</h1>
              <p className={styles.heroIntro}>
                i build backend systems, ai features, and products people
                actually use.
              </p>
              <p className={styles.summary}>
                i&apos;m a software engineer at oracle, where i work on oci database
                workflows running on google cloud.
              </p>
              <p className={styles.summary}>
                most days that means backend work, release testing, and digging
                through production issues. i&apos;ve also built ai features, search
                tools, and full-stack products with react, nestjs, spring boot,
                and java.
              </p>
              <SocialLinks />
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
                  building and testing oci database workflows on gcp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.linkGrid}>
            <a className={styles.linkCard} href={withBasePath("/work")}>
              <p className={styles.sectionEyebrow}>work</p>
              <h2>what i&apos;ve worked on.</h2>
            </a>
            <a className={styles.linkCard} href={withBasePath("/hobbies")}>
              <p className={styles.sectionEyebrow}>hobbies</p>
              <h2>photos, uga football, and pool.</h2>
            </a>
            <a className={styles.linkCard} href={withBasePath("/contact")}>
              <p className={styles.sectionEyebrow}>contact</p>
              <h2>ways to reach me.</h2>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
