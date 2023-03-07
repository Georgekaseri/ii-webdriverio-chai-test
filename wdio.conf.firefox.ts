import type { Options } from "@wdio/types";
import { config as baseConfig } from "./wdio.conf";

export const config: Options.Testrunner = {
  ...baseConfig,
  capabilities: [{
    browserName: 'firefox',
    "moz:debuggerAddress": true
  }],

};
