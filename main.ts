// Angry Judge: The Short Rant Contest
// Writes one short, funny rant about an everyday annoyance to /output/entry.txt.
// Gate: UTF-8 text, 1-400 characters, not only whitespace. No trailing newline:
// every byte counts toward the size tie-break, so the file is exactly the rant.

import { mkdirSync, writeFileSync } from "node:fs";

const RANT =
  "I bought one sandwich. The self-checkout scanned it, weighed it, then screamed 'UNEXPECTED ITEM IN THE BAGGING AREA' like I'd smuggled a piano into the store. I froze. A teenager strolled over, pressed one button, and undid in two seconds what the machine spent a full minute accusing me of. We fired every cashier and replaced them with a robot that calls security on a ham sandwich.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, RANT, "utf8");
