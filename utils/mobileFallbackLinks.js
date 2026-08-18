// Some work `url`s point to interactive, keyboard-driven artifacts (e.g. Manim HTML
// presentations navigated with arrow keys / fullscreen) that touch-only devices can't
// drive. This maps such a `url` to a fallback link (typically the source repo) to use
// on those devices instead, without needing a dedicated DB column for it.
export const mobileFallbackLinks = {
  '/machine_learning/artifacts/AlphaStar.html':
    'https://github.com/FBosso/AlphaStar-manim',
}

export function resolveWorkUrl(url, isTouchOnly) {
  if (isTouchOnly && mobileFallbackLinks[url]) {
    return mobileFallbackLinks[url]
  }
  return url
}
