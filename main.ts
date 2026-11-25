import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, "My alarm checked the calendar, saw it was Saturday, and rang at 6 AM anyway, because Saturday silence costs $9.99 a month and I am still on the free plan.");
// Snooze Button Roast — one line, 152 characters, no trailing newline.
chmodSync(target, 0o644);
