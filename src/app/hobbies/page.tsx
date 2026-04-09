import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { hobbies, withAssetBase } from "../site";
import styles from "../page.module.css";

export default function HobbiesPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/hobbies" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>hobbies</p>
            <h1>hobbies.</h1>
            <p className={styles.summary}>
              stuff i like outside of work.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.hobbyGrid}>
            {hobbies.map((hobby) => (
              <article key={hobby.title} className={styles.hobbyCard}>
                <div className={styles.hobbyMedia}>
                  {hobby.gallery ? (
                    <div
                      className={`${styles.photoGallery} ${
                        hobby.galleryLayout === "grid" ? styles.photoGalleryGrid : ""
                      }`}
                    >
                      {hobby.gallery.map((shot, index) => (
                        <div
                          key={shot.src}
                          className={`${styles.galleryShot} ${
                            index === 0 && hobby.galleryLayout !== "grid"
                              ? styles.galleryShotLarge
                              : ""
                          }`}
                        >
                          <Image
                            src={withAssetBase(shot.src)}
                            alt={shot.alt}
                            width={shot.width}
                            height={shot.height}
                            className={styles.galleryImage}
                            sizes={
                              hobby.galleryLayout === "grid"
                                ? "(max-width: 720px) 100vw, 32vw"
                                : index === 0
                                  ? "(max-width: 720px) 100vw, 100vw"
                                  : "(max-width: 720px) 100vw, 49vw"
                            }
                          />
                        </div>
                      ))}
                    </div>
                  ) : hobby.imageSrc ? (
                    <div className={styles.detailFrame}>
                      <div className={styles.imageBadge}>{hobby.tag}</div>
                      <Image
                        src={withAssetBase(hobby.imageSrc)}
                        alt={hobby.imageAlt ?? hobby.title}
                        width={hobby.imageWidth ?? 768}
                        height={hobby.imageHeight ?? 1024}
                        className={styles.detailImage}
                        sizes="(max-width: 720px) 100vw, 980px"
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
