import React from 'react'
import styled from 'styled-components'

import CodeBox from '../code-box'
import Blockquote from '../blockquote'
import Pre from '../pre'

const renderContent = content =>
  content.content.htmlAst.children.map((element, index) => {
    if (element.type === 'element') {
      if (element.tagName === 'h1') {
        return (
          <Heading key={index} id={element.children[0].value.toLowerCase()}>
            {element.children[0].value}
          </Heading>
        )
      } else if (element.tagName === 'blockquote') {
        return <Blockquote key={index} node={element} />
      } else if (element.tagName === 'div') {
        return <Pre key={index} node={element} />
      } else {
        return (
          <Paragraph as={element.tagName} key={index}>
            {element.children[0].value}
          </Paragraph>
        )
      }
    }
    return null
  })

const Page = ({ content }) => {
  return (
    <View>
      <CodeBox content={content} />
      <Content>{renderContent(content)}</Content>
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

const Heading = styled.h1`
  background-color: white;
  border-bottom: 1px solid silver;
  border-top: 1px solid silver;
  box-sizing: border-box;
  clear: both;
  display: block;
  font-size: 25px;
  padding: 0.5em 28px;
  margin-right: 50%;
  width: 50%;
  &:first-child {
    margin-top: 0;
    border-top-width: 0;
  }
`

const Paragraph = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
`
