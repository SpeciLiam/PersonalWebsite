import { tabs, withBasePath } from "@/app/site";
import styles from "./site-header.module.css";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.markWrap} aria-label="Liam Van mark">
        <span className={styles.markChevron} />
        <span className={styles.markChevron} />
      </div>
      <nav className={styles.tabNav} aria-label="Section navigation">
        {tabs.map((tab) => (
          <a
            key={tab.href}
            href={withBasePath(tab.href)}
            className={`${styles.tabLink} ${
              currentPath === tab.href ? styles.active : ""
            }`}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
