import React from 'react'
import styled from 'styled-components'

const renderCode = element =>
  element.children.map((child, index) => {
    if (child.type === 'element' && child.tagName === 'code') {
      return <Code key={index}>{renderText(child)}</Code>
    }
  })

const renderText = element =>
  element.children.map((child, index) => {
    if (child.type === 'text') {
      return <Text key={index}>{child.value}</Text>
    } else if (child.type === 'element') {
      return (
        <Text key={index} as={child.tagName}>
          {child.children[0].value}
        </Text>
      )
    }
  })

const Pre = ({ node }) => {
  return <View>{renderCode(node)}</View>
}

export default Pre

const View = styled.pre`
  background-color: #1e2224;
  clear: right;
  color: #fff;
  box-sizing: border-box;
  float: right;
  margin: 0;
  padding: 2em 28px;
  width: 50%;
`

const Code = styled.code`
  color: #eee;
  font-family: monospace;
  hyphens: auto;
  line-height: 1.5;
  padding: 13px 2em;
  margin: 0;
  word-break: break-all;
  white-space: pre;
`

const Text = styled.span``
