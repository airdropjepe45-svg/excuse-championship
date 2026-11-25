import { writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I finished at 2 a.m. Your approval card timed out while you slept, so nothing pushed. I have been 'almost done' for six hours.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
