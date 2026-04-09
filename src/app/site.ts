const repoBase = process.env.GITHUB_ACTIONS === "true" ? "/PersonalWebsite" : "";

export const withAssetBase = (path: string) => `${repoBase}${path}`;
export const withBasePath = (path: string) =>
  path === "/" ? `${repoBase}/` : `${repoBase}${path}/`;

export const tabs = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "hobbies", href: "/hobbies" },
  { label: "contact", href: "/contact" },
];

export type WorkBrand = "oracle" | "googleCloud" | "caterpillar";

export type WorkItem = {
  eyebrow: string;
  brands: WorkBrand[];
  title: string;
  body: string;
  points: string[];
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
  },
];

export type Hobby = {
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

export const hobbies: Hobby[] = [
  {
    title: "Photography",
    tag: "Visual diary",
    description:
      "Photography is probably my favorite way to slow down and pay attention to light, framing, and little details.",
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
      "College football is part sport, part routine, and part excuse to be around friends. most of that energy goes to uga.",
    imageSrc: "/images/football-photo.jpeg",
    imageAlt: "Liam with friends at a college football game",
  },
  {
    title: "Playing pool",
    tag: "Off-hours reset",
    description:
      "Pool is a good reset for me. it&apos;s focused, competitive, and a lot more about rhythm than people think.",
    placeholder: "Pool hall photo slot",
  },
];
