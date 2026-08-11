export const SITE_URL = 'https://francesco-bosso.github.io'
export const SITE_NAME = 'Francesco Bosso'
export const DEFAULT_IMAGE = `${SITE_URL}/homepage/me.webp`

// Builds the canonical link + Open Graph / Twitter meta shared by every
// page's head(). Kept as a plain function (not a mixin) since pages here
// intentionally don't share component logic - see CLAUDE.md.
export function buildSeoMeta({
  path,
  title,
  description,
  image = DEFAULT_IMAGE,
  type = 'website',
}) {
  const url = `${SITE_URL}${path}`
  return {
    link: [{ hid: 'canonical', rel: 'canonical', href: url }],
    meta: [
      { hid: 'og:title', property: 'og:title', content: title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description,
      },
      { hid: 'og:url', property: 'og:url', content: url },
      { hid: 'og:type', property: 'og:type', content: type },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:site_name', property: 'og:site_name', content: SITE_NAME },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:title', name: 'twitter:title', content: title },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      { hid: 'twitter:image', name: 'twitter:image', content: image },
    ],
  }
}

// Resolves a path (as stored in the DB / static assets, e.g. '/geospatial/foo.png')
// to an absolute URL, since OG/Twitter/JSON-LD images must not be relative.
export function absoluteUrl(path) {
  if (!path) return DEFAULT_IMAGE
  if (/^https?:\/\//.test(path)) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

// Meta descriptions should stay short (~155 chars) or search engines truncate
// them mid-sentence.
export function truncate(text, length = 155) {
  if (!text || text.length <= length) return text || ''
  return `${text.slice(0, length - 1).trimEnd()}…`
}

// BreadcrumbList JSON-LD matching the visible BreadCrump component, so
// structured data mirrors what's actually on the page.
export function buildBreadcrumbList(items) {
  return {
    hid: 'ld-json-breadcrumb',
    type: 'application/ld+json',
    json: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
  }
}
