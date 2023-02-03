import { writable } from 'svelte/store'
import themeOptions from 'virtual:sveltepress/theme-default'

export const sidebarCollapsed = writable(true)

export const tocCollapsed = writable(true)

export const anchors = writable([])

export const pages = writable([])

export const resolvedSidebar = writable([])

resolvedSidebar.subscribe((sidebar) => {
  pages.set(sidebar.reduce(
    (allPages, item) =>
      Array.isArray(item.items)
        ? [...allPages, ...item.items]
        : [...allPages, item],
    [],
  ))
})

sidebarCollapsed.subscribe((v) => {
  if (!v)
    tocCollapsed.set(true)
})

tocCollapsed.subscribe((v) => {
  if (!v)
    sidebarCollapsed.set(true)
})

export const resolveSidebar = (routeId) => {
  const key = Object.keys(themeOptions.sidebar || {}).find(key =>
    routeId.startsWith(key),
  )
  if (key) resolvedSidebar.set(themeOptions.sidebar[key] || [])
}
