import { SiteHeader } from "@/components/SiteHeader";
import { projects, work } from "../site";
import styles from "../page.module.css";

export default function WorkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <SiteHeader currentPath="/work" />
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>work</p>
            <h1>Recent work across cloud systems, AI, and product engineering.</h1>
            <p className={styles.summary}>
              A short selection of the systems and product work Liam has spent
              the most time on recently.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.timeline}>
            {work.map((item) => (
              <article key={item.title} className={styles.timelineCard}>
                <p className={styles.timelineEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className={styles.timelineBody}>{item.body}</p>
                <ul className={styles.pointList}>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <article key={project.title} className={styles.projectCard}>
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
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
