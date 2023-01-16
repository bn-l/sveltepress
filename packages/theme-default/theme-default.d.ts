declare module "virtual:sveltepress/theme-default" {
  export interface WithTitle {
    title: string
  }

  export interface LinkItem extends WithTitle {
    to: string
  }

  export interface LinkGroup {
    title: string
    items: (LinkItem | LinkGroup)[]
  }

  export interface DefaultThemeOptions {
    navbar: Array<LinkItem | LinkGroup>
    github?: string
    logo?: string
    sidebar?: Record<string, (LinkItem | LinkGroup)[]>
    editLink?: string
  }

  
  const options: DefaultThemeOptions
  export default options
}