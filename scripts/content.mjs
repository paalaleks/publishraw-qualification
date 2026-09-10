// A controlled customer fixture loader, not a PublishRaw adapter or syntax qualification.
import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { marked } from "marked";
import { parseDocument } from "yaml";

const root = new URL("../", import.meta.url);
const items = [];
for (const file of (await readdir(new URL("content/notes/", root))).sort()) {
  if (!file.endsWith(".md")) continue;
  const source = (await readFile(new URL(`content/notes/${file}`, root), "utf8")).replaceAll("\r\n", "\n");
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(source);
  if (!match) throw new Error("Expected YAML frontmatter");
  const doc = parseDocument(match[1]);
  if (doc.errors.length || doc.warnings.length) throw new Error("Invalid frontmatter");
  const fields = doc.toJS({ maxAliasCount: 0 });
  if (!fields || typeof fields.title !== "string" || !fields.title || !Number.isSafeInteger(fields.order)) {
    throw new Error("Expected title and integer order");
  }
  // All input is committed fixture prose. Do not use this trusted-HTML loader for arbitrary uploads.
  items.push({ id: file.slice(0, -3), title: fields.title, order: fields.order,
    html: marked.parse(match[2], { async: false }) });
}
items.sort((a, b) => a.order - b.order || a.id.localeCompare(b.id));
await mkdir(new URL("src/generated/", root), { recursive: true });
await writeFile(new URL("src/generated/notes.json", root), JSON.stringify(items, null, 2) + "\n");
