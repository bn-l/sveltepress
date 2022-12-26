// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { visit } from 'unist-util-visit'
import { uid } from 'uid'

const BASE_PATH = resolve(process.cwd(), '.sveltepress/live-code')
const LIVE_CODE_MAP = resolve(BASE_PATH, 'live-code-map.json')

const liveCode = function () {
  if (!existsSync(BASE_PATH)) {
    mkdirSync(BASE_PATH, {
      recursive: true,
    })
  }

  if (!existsSync(LIVE_CODE_MAP))
    writeFileSync(LIVE_CODE_MAP, '{}')

  return (tree, vFile) => {
    visit(
      tree,
      (node, idx, parent) => {
        const { meta, lang, type, data } = node

        if (type === 'code' && lang === 'svelte' && meta?.split(' ').includes('live') && idx !== null && !data?.liveCodeResolved) {
          const expansionNode = {
            type: 'liveCode',
            data: {
              hName: 'div',
              hProperties: {
                reverse: '{true}',
                title: 'Click to fold/expand code',
              },
            },
            children: [{
              ...node,
              data: {
                ...node.data,
                liveCodeResolved: true, // mark this node as resolved
              },
            }],
          }
          const idNameMap = JSON.parse(readFileSync(LIVE_CODE_MAP, 'utf-8'))
          const blockId = `${vFile.filename}-${idx}`
          let name = idNameMap[blockId]
          if (!name) {
            name = idNameMap[blockId] = `LiveCode${uid()}.svelte`
            writeFileSync(LIVE_CODE_MAP, JSON.stringify(idNameMap))
          }

          writeFileSync(resolve(BASE_PATH, name), node.value || '')
          const svelteComponent = {
            type: 'html',
            value: `
{#await import('$live-code/${name}')}
{:then Comp}
  <svelte:component this="{Comp.default}"></svelte:component>
{:catch err}
  <div text-red-5>Live Code Error: {JSON.stringify(err)}</div>
{/await}`,
          }

          const liveCodeNode = {
            type: 'liveCode',
            data: {
              hName: 'div',
              hProperties: {
                'bg-white': '',
                'dark:bg-111111': '',
                'mb-8': '',
                'shadow-sm': '',
                'rounded-md': '',
              },
            },
            children: [
              svelteComponent,
              expansionNode,
            ],
          }

          parent.children.splice(idx, 1, liveCodeNode)
        }
      })
  }
}

export default liveCode
