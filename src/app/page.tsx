import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { homeHighlights, withAssetBase, withBasePath } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/" />
          <div className={styles.homeHeroTop}>
            <div className={styles.heroCopy}>
              <h1 className={styles.homeName}>liam <em>van.</em></h1>
              <p className={styles.homeRole}>
                software engineer · oracle x google cloud · athens, ga
              </p>
            </div>
            <div className={styles.homePortrait}>
              <Image
                src={withAssetBase("/images/hero-portrait.jpeg")}
                alt="Portrait of Liam outdoors"
                width={1179}
                height={1570}
                priority
              />
            </div>
          </div>
          <p className={styles.heroBio}>
            i build backend systems, ai features, and products people actually
            use. most days that means go and java on oci + gcp, digging through
            production issues, and occasionally shipping something from scratch.
          </p>
          <div className={styles.heroQuickLinks}>
            <a href={withBasePath("/work")}>work</a>
            <a href={withBasePath("/running")}>running</a>
            <a href={withBasePath("/hobbies")}>hobbies</a>
            <a href={withBasePath("/contact")}>contact</a>
          </div>
          <SocialLinks />
        </section>

        <section className={styles.section}>
          <p className={styles.sectionEyebrow}>now</p>
          <div className={styles.pulseRow}>
            <span className={styles.pulseDot} />
            <span>active · oracle x google cloud</span>
          </div>
          <div className={styles.nowGrid}>
            {homeHighlights.map((item) => (
              <article key={item.label} className={styles.nowCard}>
                <p>{item.label}</p>
                <h2>{item.title}</h2>
                <span>{item.body}</span>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
