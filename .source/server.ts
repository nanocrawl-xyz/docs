// @ts-nocheck
import * as __fd_glob_12 from "../content/docs/sdk/volume-tiers.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/sdk/pricing.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/sdk/index.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/sdk/dashboard.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/sdk/configuration.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/agent/wallet.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/agent/tools.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/agent/index.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/agent/configuration.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/sdk/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/agent/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "agent/meta.json": __fd_glob_1, "sdk/meta.json": __fd_glob_2, }, {"index.mdx": __fd_glob_3, "agent/configuration.mdx": __fd_glob_4, "agent/index.mdx": __fd_glob_5, "agent/tools.mdx": __fd_glob_6, "agent/wallet.mdx": __fd_glob_7, "sdk/configuration.mdx": __fd_glob_8, "sdk/dashboard.mdx": __fd_glob_9, "sdk/index.mdx": __fd_glob_10, "sdk/pricing.mdx": __fd_glob_11, "sdk/volume-tiers.mdx": __fd_glob_12, });