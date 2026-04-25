import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { homeHighlights, hobbies, projects, withAssetBase, work } from "./site";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="top" className={styles.hero}>
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
            <a href="#now">now</a>
            <a href="#work">work</a>
            <a href="#running">running</a>
            <a href="#hobbies">hobbies</a>
            <a href="#contact">contact</a>
          </div>
          <SocialLinks />
        </section>

        <section id="now" className={styles.section}>
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

        <section id="work" className={styles.section}>
          <p className={styles.sectionEyebrow}>experience</p>
          <h2 className={styles.sectionTitle}>work.</h2>
          <div className={styles.timeline}>
            {work.map((item, index) => (
              <article key={item.title} className={styles.timelineCard}>
                <div className={styles.workNumber}>0{index + 1}</div>
                <div>
                  <div className={styles.workHeader}>
                    <div>
                      <p className={styles.timelineEyebrow}>{item.eyebrow}</p>
                      <h3>{item.title}</h3>
                    </div>
                    <div className={styles.companyChips}>
                      {item.brands.map((brand) => (
                        <span key={brand}>{brand === "googleCloud" ? "Google Cloud" : brand}</span>
                      ))}
                    </div>
                  </div>
                  <p className={styles.timelineBody}>{item.body}</p>
                  <ul className={styles.pointList}>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className={styles.techRow}>
                    {item.tech.map((t) => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.projectBlock}>
            <p className={styles.sectionEyebrow}>projects</p>
            <div className={styles.projectGrid}>
              {projects.map((project) => (
                <article key={project.title} className={styles.projectCard}>
                  <div className={styles.imageShell}>
                    <div className={styles.imagePlaceholder}>
                      <span>{project.tag}</span>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3>{project.title}</h3>
                    <p className={styles.timelineBody}>{project.description}</p>
                    <div className={styles.techRow}>
                      {project.tech.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="running" className={styles.section}>
          <p className={styles.sectionEyebrow}>strava</p>
          <h2 className={styles.sectionTitle}>running.</h2>
          <div className={styles.runSummaryRow}>
            <div className={styles.runStat}>
              <span className={styles.runStatValue}>5</span>
              <span className={styles.runStatLabel}>runs · april</span>
            </div>
            <div className={styles.runStat}>
              <span className={styles.runStatValue}>24.6</span>
              <span className={styles.runStatLabel}>miles · april</span>
            </div>
            <div className={styles.runStat}>
              <span className={styles.runStatValue}>9:34</span>
              <span className={styles.runStatLabel}>avg pace</span>
            </div>
          </div>
          <p className={styles.stravaAttribution}>
            via strava ·{" "}
            <a href="https://www.strava.com/athletes/109662176" target="_blank" rel="noopener noreferrer">
              view profile
            </a>
          </p>
        </section>

        <section id="hobbies" className={styles.section}>
          <p className={styles.sectionEyebrow}>outside work</p>
          <h2 className={styles.sectionTitle}>hobbies.</h2>
          <div className={styles.hobbyGrid}>
            {hobbies.map((hobby) => (
              <article key={hobby.title} className={styles.hobbyCard}>
                <div className={styles.hobbyContent}>
                  <p className={styles.timelineEyebrow}>{hobby.tag}</p>
                  <h3>{hobby.title}</h3>
                </div>
                <div className={styles.hobbyMedia}>
                  {hobby.gallery ? (
                    <div
                      className={`${styles.photoGallery} ${
                        hobby.galleryLayout === "grid" ? styles.photoGalleryGrid : ""
                      }`}
                    >
                      {hobby.gallery.map((shot) => (
                        <div key={shot.src} className={styles.galleryShot}>
                          <Image
                            src={withAssetBase(shot.src)}
                            alt={shot.alt}
                            width={shot.width}
                            height={shot.height}
                            className={styles.galleryImage}
                            sizes={
                              hobby.galleryLayout === "grid"
                                ? "(max-width: 720px) 100vw, 32vw"
                                : "(max-width: 720px) 100vw, 49vw"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  ) : hobby.imageSrc ? (
                    <div className={styles.detailFrame}>
                      <Image
                        src={withAssetBase(hobby.imageSrc)}
                        alt={hobby.imageAlt ?? hobby.title}
                        width={hobby.imageWidth ?? 768}
                        height={hobby.imageHeight ?? 1024}
                        className={styles.detailImage}
                        sizes="(max-width: 720px) 100vw, 780px"
                      />
                    </div>
                  ) : null}
                </div>
                <p className={styles.timelineBody}>{hobby.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <p className={styles.sectionEyebrow}>contact</p>
          <h2 className={styles.sectionTitle}>let&apos;s talk.</h2>
          <p className={styles.summary}>
            always open to interesting conversations. email is still the easiest
            way to reach me.
          </p>
          <div className={styles.contactGrid}>
            <a className={styles.contactCard} href="mailto:liamvanpj@gmail.com">
              <p>email</p>
              <span>liamvanpj@gmail.com</span>
            </a>
            <a className={styles.contactCard} href="https://github.com/SpeciLiam" target="_blank" rel="noopener noreferrer">
              <p>github</p>
              <span>SpeciLiam</span>
            </a>
            <a className={styles.contactCard} href="https://www.linkedin.com/in/liam-van" target="_blank" rel="noopener noreferrer">
              <p>linkedin</p>
              <span>liam-van</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
