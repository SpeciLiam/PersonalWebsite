import { tabs, withBasePath } from "@/app/site";
import styles from "./site-header.module.css";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <div className={styles.topBar}>
      <a href={withBasePath("/")} className={styles.markWrap} aria-label="Liam Van home">
        lv.
      </a>
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
