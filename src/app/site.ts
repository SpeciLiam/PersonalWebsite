export const withAssetBase = (path: string) => path;
export const withBasePath = (path: string) => path;

export const tabs = [
  { label: "now", href: "#now" },
  { label: "work", href: "#work" },
  { label: "running", href: "#running" },
  { label: "hobbies", href: "#hobbies" },
  { label: "contact", href: "#contact" },
];

export const homeHighlights = [
  {
    label: "role",
    title: "software engineer",
    body: "oracle · gcp integration (oasis)",
  },
  {
    label: "building",
    title: "oci databases on gcp",
    body: "create, restore, backup, and data guard flows",
  },
  {
    label: "stack",
    title: "go · java · terraform",
    body: "grafana, oci, gcp cloud infrastructure",
  },
  {
    label: "outside work",
    title: "running, photos, and pool",
    body: "the stuff i spend time on when i log off",
  },
];

export type WorkBrand = "oracle" | "googleCloud" | "caterpillar";

export type WorkItem = {
  eyebrow: string;
  brands: WorkBrand[];
  title: string;
  body: string;
  points: string[];
  tech: string[];
};

export const work: WorkItem[] = [
  {
    eyebrow: "Now",
    brands: ["oracle", "googleCloud"],
    title: "Oracle · GCP Integration (Oasis)",
    body:
      "I work on bringing OCI database services onto GCP, making sure create, restore, backup, and Data Guard flows work across the API, console, and CLI.",
    points: [
      "Work with Oracle and Google Cloud teams to unblock issues and line up production fixes.",
      "Build AI-assisted testing and internal tools for customer-facing database workflows.",
      "Help with releases, on-call support, and production debugging with Grafana and T2 telemetry.",
    ],
    tech: ["Go", "Java", "GCP", "OCI", "Grafana", "Terraform"],
  },
  {
    eyebrow: "Built",
    brands: ["oracle"],
    title: "Oracle University · LLM Search and Recommendations",
    body:
      "During my Oracle internship, I built AI features that made learning content easier to find and more useful for each person using it.",
    points: [
      "Built an LLM-powered recommendation experience for OCI learning content.",
      "Added OpenSearch-based video retrieval to Oracle University search.",
      "Shipped React and NestJS product features from design feedback through launch.",
    ],
    tech: ["React", "NestJS", "TypeScript", "OpenSearch", "LLM", "OCI"],
  },
  {
    eyebrow: "Earlier",
    brands: ["caterpillar"],
    title: "Caterpillar · Backend and Data Systems",
    body:
      "Before Oracle, I worked on backend APIs, data pipelines, and platform reliability in enterprise systems where performance and correctness mattered.",
    points: [
      "Converted JSON workflows to Apache Parquet and improved storage efficiency by 30%.",
      "Built APIs and data flows that improved analysis speed by 50%.",
      "Improved distributed caching and CI/CD across Spring Boot and Angular services.",
    ],
    tech: ["Java", "Spring Boot", "Angular", "Parquet", "Redis", "CI/CD"],
  },
];

export const projects = [
  {
    title: "Fantasy Wizard",
    tag: "Product + AI",
    description:
      "A fantasy football app built with React and Spring Boot for lineup, trade, and draft decisions.",
    imageLabel: "Project screenshot placeholder",
    points: [
      "React frontend with Spring Boot backend",
      "Sleeper API integrations and league activity tracking",
      "AI chat assistant for lineup, trade, and draft advice",
    ],
    tech: ["React", "Spring Boot", "Java", "Sleeper API", "AI"],
  },
  {
    title: "Oracle Learning Search",
    tag: "Search + Recommendations",
    description:
      "A search and recommendation experience that made Oracle learning content easier to find and browse.",
    imageLabel: "Product UI placeholder",
    points: [
      "LLM-powered recommendations for learning content",
      "OpenSearch video retrieval pipeline",
      "React and NestJS implementation from design feedback",
    ],
    tech: ["React", "NestJS", "OpenSearch", "LLM", "TypeScript"],
  },
];

export type Hobby = {
  title: string;
  tag: string;
  description: string;
  placeholder?: string;
  imageSrc?: string;
  imageAlt?: string;
  galleryLayout?: "feature" | "grid";
  imageWidth?: number;
  imageHeight?: number;
  gallery?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
};

export const hobbies: Hobby[] = [
  {
    title: "Photography",
    tag: "Visual diary",
    galleryLayout: "feature",
    description:
      "Photography is probably my favorite way to slow down and pay attention to light, framing, and little details.",
    gallery: [
      {
        src: "/images/photography/snow-ridge-2.jpeg",
        alt: "Snow-covered mountain range panorama",
        width: 2172,
        height: 1448,
      },
      {
        src: "/images/photography/mountain-reflection.jpeg",
        alt: "Mountain framed behind a reflecting pool and cherry blossoms",
        width: 1086,
        height: 724,
      },
      {
        src: "/images/photography/times-square-snow.jpeg",
        alt: "Snowy city street with Times Square signage",
        width: 1448,
        height: 2172,
      },
      {
        src: "/images/photography/city-street-blue.jpeg",
        alt: "Blue-hour city street scene with buildings and traffic",
        width: 724,
        height: 1086,
      },
    ],
  },
  {
    title: "College football",
    tag: "UGA Saturdays",
    description:
      "College football is part sport, part routine, and part excuse to be around friends. most of that energy goes to uga.",
    imageSrc: "/images/football-photo.jpeg",
    imageAlt: "Liam with friends at a college football game",
    imageWidth: 768,
    imageHeight: 1024,
  },
  {
    title: "Playing pool",
    tag: "Off-hours reset",
    galleryLayout: "grid",
    description:
      "Pool is a good reset for me. it&apos;s focused, competitive, and a lot more about rhythm than people think.",
    gallery: [
      {
        src: "/images/pool/pool-shot-1.jpeg",
        alt: "Liam lining up a shot at a pool hall",
        width: 1536,
        height: 2048,
      },
      {
        src: "/images/pool/pool-shot-2.jpeg",
        alt: "Pool table set up in a bright lounge space",
        width: 1536,
        height: 2048,
      },
      {
        src: "/images/pool/pool-shot-3.jpeg",
        alt: "Pool table in a bar with players lining up shots",
        width: 1536,
        height: 2048,
      },
    ],
  },
];
