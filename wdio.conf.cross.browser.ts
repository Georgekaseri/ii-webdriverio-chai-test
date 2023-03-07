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
      "moz:debuggerAddress": true,
      acceptInsecureCerts: true,
      
    },
  ],


};
