import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Posts are Markdown files in content/posts. Frontmatter:
//   title: string
//   summary: string
//   tags: string[]
//   draft: true   (optional; drafts only appear in `npm run dev`)
// Posts are deliberately undated: they're organized by tag, not by time.

export interface Post {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  draft: boolean;
  html: string;
}

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const SHOW_DRAFTS = process.env.NODE_ENV === "development";

export function getPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title ?? file),
        summary: String(data.summary ?? ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        draft: data.draft === true,
        html: marked.parse(content, { async: false }) as string,
      };
    })
    .filter((p) => SHOW_DRAFTS || !p.draft)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((p) => p.slug === slug);
}

export function getAllTags(posts: Post[]): string[] {
  return Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
}
