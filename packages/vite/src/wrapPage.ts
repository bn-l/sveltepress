import { resolve } from 'path'
import { writeFileSync } from 'fs'
// import LRUCache from 'lru-cache'
import fsExtra from 'fs-extra'
import type { MdsvexOptions } from 'mdsvex'
import type { ResolvedTheme, SiteConfig } from './types'
import { BASE_PATH } from './plugin.js'
import mdToSvelte from './markdown/mdToSvelte.js'
import { parseSvelteFrontmatter } from './utils/parseSvelteFrontmatter.js'

// TODO: use cache to avoid frequently IO
// const cache = new LRUCache<string, any>({ max: 1024 })

export async function wrapPage({ id, mdOrSvelteCode, theme, siteConfig }: {
  theme?: ResolvedTheme
  siteConfig: SiteConfig
  mdOrSvelteCode: string
  id: string
}) {
  if (!theme?.pageLayout)
    return mdOrSvelteCode

  const mdsvexOptions: MdsvexOptions = {
    highlight: {
      highlighter: theme?.highlighter,
    },
    remarkPlugins: theme?.remarkPlugins,
    rehypePlugins: theme?.rehypePlugins,
  }
  let fm: Record<string, any>
  let svelteCode
  if (id.endsWith('.md')) {
    const { code, data } = await mdToSvelte({
      mdContent: mdOrSvelteCode,
      filename: id,
      mdsvexOptions,
    }) || { code: '', data: {} }
    fm = data.fm || {}
    svelteCode = code
  }
  if (id.endsWith('.svelte'))
    fm = parseSvelteFrontmatter(mdOrSvelteCode)

  const wrap = (sveltePagePath: string) => `<script>
    import Page from '${sveltePagePath}'
    import PageLayout from \'${theme.pageLayout}\'
  
    const fm = ${JSON.stringify(fm)}
    const siteConfig = ${JSON.stringify(siteConfig)}
  </script>
  <PageLayout {fm} {siteConfig}>
    <Page />
  </PageLayout>
  `
  // src/routes/foo/+page.(md|svelte) => // .sveltepress/pages/foo/_page.svelte
  const routePath = id.slice(id.indexOf('/src/routes/')).replace(/^\/src\/routes/, '').replace(/\+page.md$/, '_page.svelte')

  const fullPagePath = resolve(BASE_PATH, `pages${routePath}`)
  fsExtra.ensureFileSync(fullPagePath)
  writeFileSync(fullPagePath, svelteCode)
  return wrap(fullPagePath)
}
