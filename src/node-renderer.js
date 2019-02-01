import { Nodes } from './node-mapping'

export const renderNodes = nodes => {
  return nodes.map((node, index) => {
    if (node.type === 'element') {
      const tag = Nodes[node.tagName] || Nodes['default']

      // Render links
      if (node.tagName === 'a')
        return tag.render({
          children: renderNodes(node.children),
          href: node.properties.href,
          key: index,
        })
      const language = node.properties && node.properties.dataLanguage
      // Check for code language examples
      const active =
        typeof window !== 'undefined' &&
        node.tagName === 'div' &&
        (language === 'json' || language === window.language)
      const element = tag.render({
        children: renderNodes(node.children),
        className: node.properties.className,
        active,
        key: index,
      })
      return element
    } else if (node.type === 'text') {
      return node.value
    }

    return null
  })
}
