import type { Options } from "@wdio/types";
import { config as baseConfig } from "./wdio.conf";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
    {
      maxInstances: 1,
      browserName: "firefox",
      acceptInsecureCerts: true,
    },
  ],

  services: [
    [
      "selenium-standalone",
      {
        logPath: "logs",
        installArgs: {
          drivers: {
            firefox: { version: "0.26.0" },
          },
        },
        args: {
          drivers: {
            firefox: { version: "0.26.0" },
          },
        },
      },
    ],
  ],
};
