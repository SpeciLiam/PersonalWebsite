export const assetBase = process.env.GITHUB_ACTIONS === "true" ? "." : "";

export const withAssetBase = (path: string) => `${assetBase}${path}`;

export const tabs = [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "hobbies", href: "/hobbies" },
  { label: "contact", href: "/contact" },
];

export const work = [
  {
    eyebrow: "Now",
    title: "Oracle · GCP Integration (Oasis)",
    body:
      "Liam works on bringing OCI database services onto GCP, validating create, restore, backup, and Data Guard flows across APIs, console experiences, and CLI tooling.",
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

export const projects = [
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
      "Photography is where Liam slows down and pays closer attention to framing, light, scale, and atmosphere.",
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
      "College football is part competition, part ritual, part excuse to gather with friends. Georgia is always in the mix.",
    imageSrc: "/images/football-photo.jpeg",
    imageAlt: "Liam with friends at a college football game",
  },
  {
    title: "Playing pool",
    tag: "Off-hours reset",
    description:
      "Pool is focused, social, and quietly competitive. Less flash, more rhythm and angles.",
    placeholder: "Pool hall photo slot",
  },
];
