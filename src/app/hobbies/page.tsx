import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { hobbies, withAssetBase } from "../site";
import styles from "../page.module.css";

export default function HobbiesPage() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/hobbies" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>hobbies</p>
            <h1>Photography, college football, and a little time around a pool table.</h1>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.hobbyGrid}>
            {hobbies.map((hobby) => (
              <article key={hobby.title} className={styles.hobbyCard}>
                <div className={styles.hobbyMedia}>
                  {hobby.gallery ? (
                    <div className={styles.photoGallery}>
                      {hobby.gallery.map((shot, index) => (
                        <div
                          key={shot.src}
                          className={`${styles.galleryShot} ${
                            index === 0 ? styles.galleryShotLarge : ""
                          }`}
                        >
                          <Image
                            src={withAssetBase(shot.src)}
                            alt={shot.alt}
                            fill
                            className={styles.coverImage}
                          />
                        </div>
                      ))}
                    </div>
                  ) : hobby.imageSrc ? (
                    <div className={styles.photoFrame}>
                      <div className={styles.imageBadge}>{hobby.tag}</div>
                      <Image
                        src={withAssetBase(hobby.imageSrc)}
                        alt={hobby.imageAlt ?? hobby.title}
                        fill
                        className={styles.coverImage}
                      />
                    </div>
                  ) : (
                    <div className={styles.imageShell}>
                      <div className={styles.imageBadge}>{hobby.tag}</div>
                      <div className={styles.imagePlaceholder}>
                        <span>{hobby.placeholder}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className={styles.hobbyContent}>
                  <h3>{hobby.title}</h3>
                  <p className={styles.timelineBody}>{hobby.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
