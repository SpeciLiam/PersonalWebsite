import Link from "next/link";
import { tabs } from "@/app/site";
import styles from "./site-header.module.css";

export function SiteHeader({ currentPath }: { currentPath: string }) {
  return (
    <div className={styles.topBar}>
      <div className={styles.markWrap} aria-label="Liam Van mark">
        <span className={styles.markDot} />
        <span className={styles.markBar} />
      </div>
      <nav className={styles.tabNav} aria-label="Section navigation">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.tabLink} ${
              currentPath === tab.href ? styles.active : ""
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
