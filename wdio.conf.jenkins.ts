import type { Options } from "@wdio/types";
import { config as baseConfig } from "./wdio.conf";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      timeouts: { implicit: 0, pageLoad: 300000, script: 30000 },
      "goog:chromeOptions": {
        args: ["headless"],
      },
    },
  ],
};
