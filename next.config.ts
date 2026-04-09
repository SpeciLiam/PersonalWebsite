import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "PersonalWebsite";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubActions ? `/${repositoryName}` : "",
  assetPrefix: isGithubActions ? `/${repositoryName}/` : "",
};

export default nextConfig;
