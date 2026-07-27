---
noteId: "64550040892a11f19dcde9711b33db89"
tags: []

---

# Personal Website

This is the source for my personal site, **[francesco-bosso.github.io](https://francesco-bosso.github.io/)**, where I share the projects I've worked on: geospatial data analysis, machine learning, and a few things I've built just for fun along the way.

It's built with [Nuxt 2](https://nuxtjs.org). I picked it for a few reasons: good SEO out of the box (server-rendered meta tags), the ability to generate the whole thing as static HTML/CSS/JS with `npm run generate` (fast, cheap to host, nothing to maintain), and a familiar Vue-based structure for pages/components/layouts.

Project content (name, description, images, technologies, links) lives in a small Postgres database and is served through a lightweight Express API, then rendered into pages at build time.

## Getting started

```bash
# install dependencies
npm install

# run locally with hot reload (localhost:3000)
npm run dev

# build and run in production mode
npm run build
npm run start

# generate a static export
npm run generate
```

Running locally requires a Postgres database reachable at `postgres://postgres:postgres@localhost:5432/mapflap`.

## Container development

```bash
#run containers for back and frontend
docker compose up
```
If we want to generate an updated static website:
```bash
#run separate shell inside the container running the app
docker compose exec app sh

#build and generate the static site
npm run build
npm run generate
```

## Structure

- `pages/` — the site's routes: home, about me, and one section per project category (geospatial, artificial-intelligence, just-because).
- `components/` — reusable pieces used across pages (cards, headers, breadcrumbs, etc.).
- `server/` — the small Express API and Sequelize models backing the project data.
- `static/` — images, PDFs, and other files served as-is.
