// One-off maintenance script: strips CSS rules from the self-hosted Bootstrap
// bundle that no .vue template actually uses (97% of the stock bundle, per
// Lighthouse's unused-css-rules audit). Re-run this manually after changing
// which Bootstrap classes are used in templates, or after upgrading Bootstrap.
//
//   node scripts/purge-bootstrap.js
const fs = require('fs')
const path = require('path')
const { PurgeCSS } = require('purgecss')

const ROOT = path.join(__dirname, '..')
// Source of truth is the npm package (always the full, un-purged bundle) so
// re-running this script never purges an already-purged file.
const SOURCE_CSS = path.join(
  ROOT,
  'node_modules/bootstrap/dist/css/bootstrap.min.css'
)
const OUTPUT_CSS = path.join(ROOT, 'static/vendor/bootstrap/bootstrap.min.css')

// Classes Bootstrap's own JS (bootstrap.bundle.min.js) toggles at runtime on
// the navbar collapse - they never appear as static text in any .vue file,
// so PurgeCSS's content scan can't see them and would otherwise drop them.
const SAFELIST = ['show', 'showing', 'collapsing']

async function main() {
  const [result] = await new PurgeCSS().purge({
    content: [
      path.join(ROOT, 'components/**/*.vue'),
      path.join(ROOT, 'pages/**/*.vue'),
      path.join(ROOT, 'layouts/**/*.vue'),
    ],
    css: [SOURCE_CSS],
    safelist: SAFELIST,
  })
  fs.writeFileSync(OUTPUT_CSS, result.css)
  console.log(
    `Purged ${OUTPUT_CSS} -> ${(result.css.length / 1024).toFixed(1)} KiB`
  )
}

main()
