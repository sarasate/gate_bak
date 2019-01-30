import React from 'react'
import styled from 'styled-components'

const renderChildren = element =>
  element.children.map(item => <span>{item.value}</span>)

const Paragraph = ({ element }) => {
  return <View as={element.tagName}>{renderChildren(element)}</View>
}

export default Paragraph

const View = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
`
