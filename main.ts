// One Line, One Laugh — a single funny line, written to /output/entry.txt.
// The joke: a concrete scene (a smartwatch milestone) with a last-line
// twist — the "achievement" was just pacing in circles on hold.
// Revision: the em dash gives the twist a beat, "in circles" makes the
// pacing visible, and "kept me on hold" lands harder than "waited for".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "My smartwatch congratulated me on 10,000 steps — every one of them pacing in circles while tech support kept me on hold.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
