import { SiteHeader } from "@/components/SiteHeader";
import { CompanyMarks } from "@/components/CompanyMarks";
import { projects, work } from "../site";
import styles from "../page.module.css";

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/work" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>work</p>
            <h1>work.</h1>
            <p className={styles.summary}>
              a few of the things i&apos;ve spent the most time building.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>experience</p>
          </div>
          <div className={styles.timeline}>
            {work.map((item) => (
              <article key={item.title} className={styles.timelineCard}>
                <p className={styles.timelineEyebrow}>{item.eyebrow}</p>
                <CompanyMarks brands={item.brands} />
                <h3>{item.title}</h3>
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
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>projects</p>
          </div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <a
                key={project.title}
                className={styles.projectCard}
                href={project.url ?? "#"}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
              >
                <div className={styles.projectImageWrap}>
                  <div className={styles.imageShell}>
                    <div className={styles.imageBadge}>{project.tag}</div>
                    <div className={styles.imagePlaceholder}>
                      <span>{project.imageLabel}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <h3>{project.title}</h3>
                  <p className={styles.timelineBody}>{project.description}</p>
                  <ul className={styles.pointList}>
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className={styles.techRow}>
                    {project.tech.map((t) => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
