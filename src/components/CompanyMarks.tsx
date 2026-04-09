import type { WorkBrand } from "@/app/site";
import styles from "./company-marks.module.css";

function OracleMark() {
  return <span className={styles.oracleWordmark}>ORACLE</span>;
}

function GoogleCloudMark() {
  return (
    <span className={styles.googleCloudWrap}>
      <svg
        className={styles.googleCloudIcon}
        viewBox="0 0 64 48"
        aria-hidden="true"
      >
        <path
          d="M19 33c-4.9 0-9-4-9-9s4.1-9 9-9c.9 0 1.8.1 2.7.4A13.2 13.2 0 0 1 34 7c5.7 0 10.7 3.5 12.7 8.8.6-.2 1.3-.3 2-.3 4.6 0 8.3 3.7 8.3 8.2S53.3 32 48.7 32H19Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 24c0-5 4-9 9-9"
          fill="none"
          stroke="#EA4335"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M23 15c2-5.3 6.1-8 11-8"
          fill="none"
          stroke="#FBBC05"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M34 7c5.7 0 10.7 3.5 12.7 8.8"
          fill="none"
          stroke="#34A853"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M46.7 15.8c.6-.2 1.3-.3 2-.3 4.6 0 8.3 3.7 8.3 8.2"
          fill="none"
          stroke="#4285F4"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.googleCloudText}>Google Cloud</span>
    </span>
  );
}

function CaterpillarMark() {
  return (
    <span className={styles.caterpillarWordmark}>
      <span className={styles.catText}>CAT</span>
      <span className={styles.catTriangle} aria-hidden="true" />
      <span className={styles.caterpillarText}>Caterpillar</span>
    </span>
  );
}

const brandMap: Record<WorkBrand, { label: string; node: React.ReactNode }> = {
  oracle: {
    label: "Oracle",
    node: <OracleMark />,
  },
  googleCloud: {
    label: "Google Cloud",
    node: <GoogleCloudMark />,
  },
  caterpillar: {
    label: "Caterpillar",
    node: <CaterpillarMark />,
  },
};

export function CompanyMarks({ brands }: { brands: WorkBrand[] }) {
  return (
    <div className={styles.markRow} aria-label="Company logos">
      {brands.map((brand) => (
        <div key={brand} className={styles.markChip} aria-label={brandMap[brand].label}>
          {brandMap[brand].node}
        </div>
      ))}
    </div>
  );
}
