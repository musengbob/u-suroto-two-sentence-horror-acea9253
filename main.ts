import * as fs from "node:fs";
import * as path from "node:path";

const STORY =
  "For three weeks, the little girl across the hall has knocked on my door every night at 3 AM to warn me that the man who lives in my closet is getting hungrier. " +
  "Tonight I finally opened the closet to prove her wrong, and found a child's drawings of me sleeping \u2014 every one of them dated before I moved in.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(process.cwd(), "output");

fs.mkdirSync(outDir, { recursive: true });

const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, STORY, "utf8");

const readBack = fs.readFileSync(outPath, "utf8");
if (readBack !== STORY) {
  console.error("ERROR: read-back does not match the story byte-for-byte.");
  process.exit(1);
}

if (STORY.trim().length === 0) {
  console.error("ERROR: story is empty.");
  process.exit(1);
}

const sentenceEndings = (STORY.match(/[.!?]/g) ?? []).length;
if (sentenceEndings !== 2) {
  console.error(
    `ERROR: expected exactly 2 sentences, found ${sentenceEndings} sentence-ending marks.`
  );
  process.exit(1);
}

console.log(STORY);
