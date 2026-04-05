// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "agent/configuration.mdx": () => import("../content/docs/agent/configuration.mdx?collection=docs"), "agent/index.mdx": () => import("../content/docs/agent/index.mdx?collection=docs"), "agent/tools.mdx": () => import("../content/docs/agent/tools.mdx?collection=docs"), "agent/wallet.mdx": () => import("../content/docs/agent/wallet.mdx?collection=docs"), "sdk/configuration.mdx": () => import("../content/docs/sdk/configuration.mdx?collection=docs"), "sdk/dashboard.mdx": () => import("../content/docs/sdk/dashboard.mdx?collection=docs"), "sdk/index.mdx": () => import("../content/docs/sdk/index.mdx?collection=docs"), "sdk/pricing.mdx": () => import("../content/docs/sdk/pricing.mdx?collection=docs"), "sdk/volume-tiers.mdx": () => import("../content/docs/sdk/volume-tiers.mdx?collection=docs"), }),
};
export default browserCollections;