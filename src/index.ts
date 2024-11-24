import Bot from "./lib/bot.js";
import getPostText from "./lib/getPostText.js";

import { parseArgs } from "node:util";

const options = {
  "dry-run": {
    type: "boolean" as const,
  },
};
const {
  values,
} = parseArgs({ args: process.argv.slice(2), options });

const text = await Bot.run(getPostText, { dryRun: values["dry-run"] });

console.log(`[${new Date().toISOString()}] Posted: "${text}"`);
