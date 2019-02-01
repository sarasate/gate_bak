import React from 'react'
import styled from 'styled-components'
import { Nodes } from '../../node-mapping'

import CodeBox from '../code-box'

const renderNodes = (nodes, index) => {
  return nodes.map(node => {
    if (node.type === 'element') {
      const tag = Nodes[node.tagName] || Nodes['default']

      // Render links
      if (node.tagName === 'a')
        return tag.render({
          children: renderNodes(node.children),
          href: node.properties.href,
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
      })
      return element
    } else if (node.type === 'text') {
      return node.value
    }
  })
}

const Page = ({ content }) => {
  return (
    <View>
      <CodeBox content={content} />
      <Content>{renderNodes(content.htmlAst.children)}</Content>
    </View>
  )
}

export default Page

const View = styled.div`
  background-color: #f3f7f9;
  display: block;
  margin-left: 230px;
  min-height: 100%;
  padding-bottom: 1rem;
  position: relative;
  z-index: 30;
`

const Content = styled.div`
  position: relative;
`
