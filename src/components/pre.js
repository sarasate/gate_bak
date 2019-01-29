import React from 'react'
import styled from 'styled-components'

const renderPre = element => <Pre>{renderCode(element)}</Pre>

const renderCode = element =>
  element.children.map((child, index) => {
    if (child.type === 'element' && child.tagName === 'code') {
      return (
        <Code key={index} className={child.properties.className}>
          {renderText(child)}
        </Code>
      )
    }
  })

const renderText = element =>
  element.children.map((child, index) => {
    if (child.type === 'text') {
      return <Text key={index}>{child.value}</Text>
    } else if (child.type === 'element') {
      return (
        <Text
          key={index}
          as={child.tagName}
          className={child.properties.className}
        >
          {child.children[0].value}
        </Text>
      )
    }
  })

const CodeBlock = ({ node }) => {
  return <View>{renderPre(node.children[0])}</View>
}

export default CodeBlock

const View = styled.div`
  background-color: #1e2224;
  clear: right;
  color: #fff;
  box-sizing: border-box;
  float: right;
  margin: 0;
  padding: 2em 28px;
  width: 50%;
  overflow: auto;
`

const Pre = styled.pre`
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
`

const Text = styled.span``
