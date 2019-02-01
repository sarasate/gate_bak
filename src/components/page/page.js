import React from 'react'
import styled, { css } from 'styled-components'

import CodeBox from '../code-box'
import Blockquote from '../blockquote'

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

const Heading1 = styled.h1`
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid silver;
  box-sizing: border-box;
  clear: both;
  display: block;
  font-size: 25px;
  line-height: normal;
  padding: 0.5em 28px;
  margin-bottom: 21px;
  margin-right: 50%;
  margin-top: 2em;
  width: 50%;
  &:first-child {
    margin-top: 0;
    border-top-width: 0;
  }
`

const Heading2 = styled.h2`
  padding: 0.5em 28px;
`
const Heading3 = styled.h3`
  padding: 0.5em 28px;
`

const Paragraph = styled.p`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
  ${Blockquote} & {
    width: 100%;
  }
`

const Aside = styled.aside`
  background: ${({ className }) =>
    className.includes('warning')
      ? '#c97a7e'
      : className.includes('success')
      ? '#6ac174'
      : '#8fbcd'};
  padding: 1em 28px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  line-height: 1.6;
  margin-right: 50%;
  box-sizing: border-box;
  display: block;
`

const Notice = styled.aside`
  padding: 1em 28px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  background: #8fbcd4;
  line-height: 1.6;
  margin-right: 50%;
  box-sizing: border-box;
  display: block;
`

const Success = styled(Notice)`
  background: #6ac174;
`

const Warning = styled(Notice)`
  background: #c97a7e;
`

const Span = styled.span``
const Link = styled.a.attrs(() => ({
  target: '_blank',
}))``

const Div = styled.div`
  background-color: #1e2123;
  clear: right;
  color: #fff;
  display: ${({ active }) => (active ? 'block' : 'none')};
  box-sizing: border-box;
  float: right;
  margin: 0;
  padding: 2em 28px;
  width: 50%;
  overflow: auto;
`
const Pre = styled.pre`
  background-color: #1e2123 !important;
  white-space: pre;
`
const Code = styled.code`
  color: #eee;
  font-family: monospace;
  hyphens: auto;
  line-height: 1.5;
  padding: 0;
  margin: 0;
  word-break: break-all;
  white-space: pre;
  ${Paragraph} & {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    display: inline;
    font-size: 12px;
    font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
      serif;
    padding: 4px;
  }
`

const Default = styled.div`
  padding: 0.5em 28px;
  width: 50%;
`

const Nodes = {
  a: Link,
  aside: Aside,
  blockquote: Blockquote,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  code: Code,
  div: Div,
  pre: Pre,
  notice: Notice,
  success: Success,
  warning: Warning,
  span: Span,
  default: Default,
}
