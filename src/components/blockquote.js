import React from 'react'
import styled from 'styled-components'

const renderParagraphs = element =>
  element.children.map((child, index) => {
    if (child.type === 'element' && child.tagName === 'p') {
      return <Paragraph key={index}>{renderText(child)}</Paragraph>
    }
  })

const renderText = element =>
  element.children.map((child, index) => {
    if (child.type === 'text') {
      return <span key={index}>{child.value}</span>
    } else if (child.type === 'element') {
      return (
        <Text key={index} as={child.tagName}>
          {child.children[0].value}
        </Text>
      )
    }
  })

const Blockquote = ({ node }) => {
  return <View>{renderParagraphs(node)}</View>
}

export default Blockquote

const View = styled.blockquote`
  background-color: #1e2224;
  box-sizing: border-box;
  clear: right;
  color: white;
  display: block;
  float: right;
  font-size: 14px;
  margin: 0;
  width: 50%;
`

const Paragraph = styled.p`
  background-color: #191d1f;
  color: #eee;
  padding: 13px 2em;
  margin: 0;
`

const Text = styled.p``
