import styles from "./social-links.module.css";

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "currentColor",
  "aria-hidden": true,
};

function GitHubIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.51v-1.98c-2.93.64-3.55-1.24-3.55-1.24-.48-1.21-1.16-1.53-1.16-1.53-.95-.65.07-.64.07-.64 1.05.07 1.61 1.08 1.61 1.08.94 1.6 2.45 1.14 3.05.87.1-.68.37-1.14.67-1.4-2.34-.27-4.8-1.17-4.8-5.2 0-1.15.41-2.08 1.08-2.82-.1-.26-.47-1.34.1-2.79 0 0 .89-.28 2.9 1.08a10.05 10.05 0 0 1 5.28 0c2-1.36 2.88-1.08 2.88-1.08.58 1.45.22 2.53.11 2.79.68.74 1.08 1.67 1.08 2.82 0 4.04-2.47 4.93-4.82 5.19.37.32.71.96.71 1.95v2.89c0 .28.2.62.72.51A10.5 10.5 0 0 0 12 1.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5.44 8.97H2.3V21h3.14V8.97Zm.21-3.72c0-1.01-.76-1.75-1.78-1.75S2.1 4.24 2.1 5.25C2.1 6.24 2.85 7 3.86 7h.01c1.03 0 1.78-.76 1.78-1.75ZM21.9 13.53c0-3.7-1.97-5.42-4.6-5.42-2.11 0-3.06 1.16-3.59 1.97V8.97h-3.13c.04.73 0 12.03 0 12.03h3.13v-6.72c0-.36.03-.72.13-.97.29-.72.95-1.47 2.05-1.47 1.45 0 2.03 1.1 2.03 2.72V21H21.9v-7.47Z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className={styles.socialRow}>
      <a
        className={styles.iconLink}
        href="https://github.com/SpeciLiam"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
      <a
        className={styles.iconLink}
        href="https://www.linkedin.com/in/liam-van"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <a className={styles.emailLink} href="mailto:liamvanpj@gmail.com">
        liamvanpj@gmail.com
      </a>
    </div>
  );
}
