// Shrinks the case study images in public/work in place.
// Run it after you add a screenshot. Then update the width and height of its <Figure>.
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// The column is 592px wide. 1600px is sharp on 2x and most 3x screens.
const MAX_WIDTH = 1600;
const root = path.join(process.cwd(), "public/work");

const files = (await fs.readdir(root, { recursive: true })).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const fullPath = path.join(root, file);
  const original = await fs.readFile(fullPath);
  const resized = sharp(original).resize({ width: MAX_WIDTH, withoutEnlargement: true });

  // Palette PNG is much smaller for flat UI screenshots, but larger for photos. Keep the smaller one.
  const [lossless, palette] = await Promise.all([
    resized.clone().png({ compressionLevel: 9, effort: 10 }).toBuffer(),
    resized.clone().png({ palette: true, quality: 90, compressionLevel: 9, effort: 10 }).toBuffer(),
  ]);
  const best = palette.length < lossless.length ? palette : lossless;

  if (best.length >= original.length) {
    console.log(`skip  ${file}`);
    continue;
  }

  await fs.writeFile(fullPath, best);
  const { width, height } = await sharp(best).metadata();
  const kb = (n) => `${Math.round(n / 1024)} KB`;
  console.log(`${kb(original.length)} -> ${kb(best.length)}  ${width}x${height}  ${file}`);
}
