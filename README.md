# akottu.github.io

Anish Kottu's personal site: [akottu.github.io](https://akottu.github.io). Next.js (static export) and Tailwind CSS, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000, shows draft posts
npm run build   # static site in out/, drafts excluded
```

## Edit the content

All copy lives in `lib/site.ts`: the tagline, about text, toolbox, experience, projects, education and links. Section colors are in `lib/accents.ts`.

## Write a post

Add a Markdown file to `content/posts/`. The file name becomes the URL (`/writing/<file-name>/`).

```markdown
---
title: The post title
summary: One or two sentences shown on the card.
tags: [Backend, AI]
draft: true
---

Post body in Markdown.
```

Posts are organized by tag, not date. Drafts (`draft: true`) only show up in `npm run dev`. Remove that line to publish. The Writing section and its nav link appear on the home page once at least one post is published.
