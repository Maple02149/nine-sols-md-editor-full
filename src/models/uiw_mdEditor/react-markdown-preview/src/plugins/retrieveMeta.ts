import type { Plugin } from 'unified'
import type { Root, RootContent } from 'hast'
import { visit } from 'unist-util-visit'

export interface RetrieveMetaOptions { }

export const retrieveMeta: Plugin<[RetrieveMetaOptions?], Root> = (options = {}) => {
  return (tree) => {
    visit(tree, (node: Root | RootContent) => {
      if (node.type === 'element' && node.tagName === 'code' && node.properties && node.properties['dataMeta']) {
        if (!node.data) {
          node.data = {} as any
        }
        let metaString = node.properties['dataMeta'] as string
        if (typeof metaString === 'string') {
          node.data ? node.data.meta = metaString : { meta: metaString }
        }
        delete node.properties['dataMeta']
      }
    })
  }
}
