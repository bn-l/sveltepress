---
title: Introduction
---

Sveltepress is a site build tool  
Inspired by [Vitepress](https://vitepress.vuejs.org/)  
Build on top of [SvelteKit](https://kit.svelte.dev/), [Mdsvex](https://mdsvex.com/), [Unocss](https://github.com/unocss/unocss)


## Project structure

Exactly the same as [Project structure - SvelteKit](https://kit.svelte.dev/docs/project-structure)

But you can use .md files for pages or layouts.  
For example:
* `src/routes/+page.md` is recognized as home page
* `src/routes/+layout.md` is used for root custom layout. (But this can not override the theme GlobalLayout) 


## Configuration

Sveltepress's config is passed to `@svelte-press/vite` vite plugin, all options are fully typed. 


## Deployment

It is recommended to read [Adapters - SvelteKit](https://kit.svelte.dev/docs/adapters) first.  
If you use `npm/yarn/pnpm create @svelte-press` to create a new project. The [Adapter Static](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) would be used as default.

But feel free to change to any adapters you want.