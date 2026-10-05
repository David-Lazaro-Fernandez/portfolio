import fs from "node:fs/promises";
import path from "node:path";

// Each collection is a folder in src/content. The file name is the slug.
// Each file exports `metadata` with a `title`. A note also needs a `date` (YYYY-MM-DD).
export function collection(name) {
  const dir = path.join(process.cwd(), "src/content", name);

  async function getSlugs() {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  }

  async function get(slug) {
    const { default: Content, metadata } = await import(`@/content/${name}/${slug}.mdx`);
    return { slug, Content, ...metadata };
  }

  // Reads the first <Figure> of the file, so the home page can prefetch it.
  async function getCover(slug) {
    const source = await fs.readFile(path.join(dir, `${slug}.mdx`), "utf8");
    const figure = source.match(/<Figure[\s\S]*?\/>/)?.[0];
    if (!figure) return null;
    const prop = (name) => figure.match(new RegExp(`${name}=(?:"([^"]+)"|\\{(\\d+)\\})`))?.slice(1).find(Boolean);
    return { src: prop("src"), width: Number(prop("width")), height: Number(prop("height")) };
  }

  async function getAll() {
    return Promise.all((await getSlugs()).map(get));
  }

  return { getSlugs, get, getCover, getAll };
}

export const notes = collection("notes");
export const work = collection("work");

export function formatDate(date) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
