import React from 'react'
import styled from 'styled-components'

const renderChildren = element =>
  element.children.map(item => {
    if (item.type === 'element') {
      if (item.tagName === 'code') return <Code>{item.children[0].value}</Code>
      if (item.tagName === 'a')
        return (
          <Link target="_blank" href={item.properties.href}>
            {item.children[0].value}
          </Link>
        )
    }
    return <Span as={item.tagName}>{item.value}</Span>
  })

const Paragraph = ({ element }) => {
  if (element.type === 'element' && element.tagName === 'aside') {
    if (element.properties.className.includes('notice'))
      return <Notice>{renderChildren(element)}</Notice>
    if (element.properties.className.includes('success'))
      return <Success>{renderChildren(element)}</Success>
    if (element.properties.className.includes('warning'))
      return <Warning>{renderChildren(element)}</Warning>
  }

  // return <View as={element.tagName}>{renderChildren(element)}</View>
  return View
}

const View = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
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
const Code = styled.code`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  display: inline;
  font-size: 12px;
  font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
    'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
    serif;
  padding: 4px;
`
const Link = styled.a``

export default View
