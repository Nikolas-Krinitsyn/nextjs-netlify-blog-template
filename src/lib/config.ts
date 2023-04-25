import configJson from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: string[];
  readonly posts_per_page: number;
  readonly twitter_account: string;
  readonly github_account: string;
};

export const config: Config = {
  ...configJson,
  site_keywords: configJson.site_keywords.map((keyword) => keyword)
};

export default config;
