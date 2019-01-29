import React from 'react'
import styled from 'styled-components'

const renderContent = content =>
  content.content.htmlAst.children.map((element, index) => {
    if (element.type === 'element') {
      const Tag = `${element.tagName}`
      return <Tag key={index}>{element.children[0].value}</Tag>
    }
  })

const Content = ({ content }) => {
  return <View>{renderContent(content)}</View>
}

export default Content

const View = styled.div`
  background-color: #f3f7f9;
  display: block;
  margin-left: 230px;
  min-height: 100%;
  position: relative;
  z-index: 10;
`
