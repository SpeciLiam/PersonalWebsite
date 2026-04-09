import Image from "next/image";
import styles from "./page.module.css";

type Hobby = {
  title: string;
  tag: string;
  description: string;
  placeholder?: string;
  imageSrc?: string;
  imageAlt?: string;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
};

const highlights = [
  {
    value: "Oracle x GCP",
    label: "Currently shipping cloud integration work tied to real production readiness.",
  },
  {
    value: ">90%",
    label: "Unit-test coverage delivered on BaseDB and Exadata Infrastructure components.",
  },
  {
    value: "1000%",
    label: "Parsing-speed gain from distributed caching work at Caterpillar.",
  },
  {
    value: "3.9 GPA",
    label: "Computer Science graduate from the University of Georgia.",
  },
];

const work = [
  {
    eyebrow: "Now",
    title: "Oracle · GCP Integration (Oasis)",
    body:
      "Liam works on bringing OCI database services onto GCP, validating create, restore, backup, and Data Guard flows across APIs, console experiences, and CLI tooling. The work sits at the intersection of backend systems, release readiness, and cross-company execution.",
    points: [
      "Partners with Oracle and Google Cloud teams to surface blockers and align production fixes.",
      "Owns AI-assisted testing, reusable tooling, and operational validation across customer-facing database workflows.",
      "Supports releases on-call and investigates live issues with Grafana and T2 telemetry.",
    ],
  },
  {
    eyebrow: "Built",
    title: "Oracle University · LLM Search and Recommendations",
    body:
      "During his Oracle internship, Liam built product-facing AI features that made learning content easier to discover and more tailored to each user.",
    points: [
      "Built an LLM-powered recommendation experience for OCI learning content.",
      "Integrated OpenSearch-based video retrieval into Oracle University's search experience.",
      "Shipped React and NestJS product features from design feedback through implementation.",
    ],
  },
  {
    eyebrow: "Earlier",
    title: "Caterpillar · Backend and Data Systems",
    body:
      "Before Oracle, Liam focused on backend APIs, data processing, and platform reliability in enterprise environments where performance and correctness mattered.",
    points: [
      "Converted JSON workflows to Apache Parquet for a 30% storage-efficiency improvement.",
      "Built APIs and data flows that improved analysis speed by 50%.",
      "Delivered distributed caching and CI/CD improvements across Spring Boot and Angular services.",
    ],
  },
];

const strengths = [
  "Cloud systems that still need to feel usable and dependable.",
  "AI features grounded in practical product value, not hype.",
  "Backend APIs, reliability work, and debugging in production-like environments.",
  "Full-stack delivery when a feature needs both the service and the interface.",
];

const projects = [
  {
    title: "Fantasy Wizard",
    tag: "Product + AI",
    description:
      "A fantasy football app built with React and Spring Boot, shaped around live league context and decision support.",
    imageLabel: "Project screenshot placeholder",
    points: [
      "React frontend with Spring Boot backend",
      "Sleeper API integrations and league activity tracking",
      "AI chat assistant for lineup, trade, and draft advice",
    ],
  },
  {
    title: "Oracle Learning Search",
    tag: "Search + Recommendations",
    description:
      "A product-facing search and recommendation experience that made Oracle learning content easier to find and navigate.",
    imageLabel: "Product UI placeholder",
    points: [
      "LLM-powered recommendations for learning content",
      "OpenSearch video retrieval pipeline",
      "React and NestJS implementation from design feedback",
    ],
  },
];

const hobbies: Hobby[] = [
  {
    title: "Photography",
    tag: "Visual diary",
    description:
      "Photography is where Liam slows down and pays closer attention to framing, light, scale, and atmosphere. The shots lean toward travel, city texture, and wide natural scenes.",
    gallery: [
      {
        src: "/images/photography/snow-ridge-2.jpeg",
        alt: "Snow-covered mountain range panorama",
      },
      {
        src: "/images/photography/mountain-reflection.jpeg",
        alt: "Mountain framed behind a reflecting pool and cherry blossoms",
      },
      {
        src: "/images/photography/times-square-snow.jpeg",
        alt: "Snowy city street with Times Square signage",
      },
      {
        src: "/images/photography/city-street-blue.jpeg",
        alt: "Blue-hour city street scene with buildings and traffic",
      },
    ],
  },
  {
    title: "College football",
    tag: "UGA Saturdays",
    description:
      "College football is part competition, part ritual, part excuse to gather with friends. Georgia is home, so the Bulldogs are always in the mix.",
    imageSrc: "/images/football-photo.jpeg",
    imageAlt: "Liam with friends at a college football game",
  },
  {
    title: "Playing pool",
    tag: "Off-hours reset",
    description:
      "Pool is the kind of hobby Liam likes most: focused, social, and quietly competitive. It is less about flash and more about feel, rhythm, and angles.",
    placeholder: "Pool hall photo slot",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.backdrop} />
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.navRow}>
            <p className={styles.kicker}>Liam Van</p>
            <p className={styles.location}>Seattle, WA</p>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                Cloud systems, AI-assisted tooling, and product-minded engineering
              </p>
              <h1>
                Liam builds software that can survive production pressure and
                still feel useful to real people.
              </h1>
              <p className={styles.summary}>
                He is a software engineer currently working on Oracle&apos;s GCP
                Integration team, where backend workflows, cross-team execution,
                and release readiness all matter at once. His work spans cloud
                systems, AI experiences, search, reliability, and full-stack
                delivery.
              </p>
            </div>
            <div className={styles.heroRail}>
              <div className={styles.heroPortrait}>
                <div className={styles.photoFrame}>
                  <div className={styles.imageBadge}>Portrait</div>
                  <Image
                    src="/images/hero-portrait.jpeg"
                    alt="Portrait of Liam outdoors"
                    fill
                    className={styles.coverImage}
                    priority
                  />
                </div>
                <div className={styles.polaroidAccent}>
                  <div className={styles.polaroidInner}>
                    <Image
                      src="/images/polaroid-friends.jpeg"
                      alt="Polaroid photo of Liam with friends"
                      fill
                      className={styles.coverImage}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.heroCard}>
                <p className={styles.cardLabel}>Current focus</p>
                <h2>Oracle x Google Cloud</h2>
                <p>
                  Building and validating OCI database workflows on GCP while
                  partnering across teams on release blockers, tooling, testing,
                  and production readiness.
                </p>
              </div>
            </div>
          </div>
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
            </a>{" "}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Outside of work</p>
            <h2>
              The personal side matters too: photography, college football, and
              a little time around a pool table.
            </h2>
          </div>
          <div className={styles.hobbyLead}>
            <div className={styles.storyPanel}>
              <p>
                The best personal-brand sites do more than list skills. They
                show taste, energy, and what a person is like away from the
                keyboard. For Liam, that means travel, strong visuals, game-day
                weekends, and hobbies that reward focus.
              </p>
              <p>
                This section is set up so stronger photography shots can drop in
                later without changing the structure of the site.
              </p>
            </div>
            <div className={styles.hobbyFeature}>
              <div className={styles.photoFrame}>
                <div className={styles.imageBadge}>Travel moment</div>
                <Image
                  src="/images/japan-gates.jpeg"
                  alt="Liam standing beneath orange gates in Japan"
                  fill
                  className={styles.coverImage}
                />
              </div>
            </div>
          </div>
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
                            src={shot.src}
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
                        src={hobby.imageSrc}
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

        <section className={styles.metrics}>
          {highlights.map((item) => (
            <article key={item.value} className={styles.metricCard}>
              <p className={styles.metricValue}>{item.value}</p>
              <p className={styles.metricLabel}>{item.label}</p>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Why teams hire Liam</p>
            <h2>
              He combines cloud-depth, product instincts, and a calm approach to
              complex systems.
            </h2>
          </div>
          <div className={styles.strengthGrid}>
            {strengths.map((strength) => (
              <div key={strength} className={styles.strengthCard}>
                <span className={styles.strengthMarker} />
                <p>{strength}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Selected work</p>
            <h2>Recent experience that actually reflects how he works.</h2>
          </div>
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
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Featured projects</p>
            <h2>
              The site is ready for visuals, even before the final screenshots
              arrive.
            </h2>
          </div>
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

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Brand statement</p>
            <h2>
              The through-line is simple: Liam likes hard systems problems, but
              he still cares whether the end result helps someone.
            </h2>
          </div>
          <div className={styles.storyPanel}>
            <p>
              That shows up in cloud integration work, in AI features that are
              meant to guide users instead of just sounding smart, and in
              full-stack projects where backend logic and frontend experience
              have to support each other.
            </p>
            <p>
              He is at his best on teams that value ownership, curiosity, and
              clear communication: places where shipping matters, but so does
              thoughtfulness.
            </p>
          </div>
        </section>

        <section className={styles.footerCard}>
          <p className={styles.sectionEyebrow}>Let&apos;s build something strong</p>
          <h2>Hiring, collaborating, or just curious about the work?</h2>
          <p>
            The easiest way to reach Liam is by email, or through his GitHub and
            LinkedIn profiles.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primary} href="mailto:liamvanpj@gmail.com">
              Start a conversation
            </a>
            <a
              className={styles.secondary}
              href="https://github.com/SpeciLiam"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
