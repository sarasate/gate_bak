import React from 'react'
import styled from 'styled-components'
import { renderNodes } from '../../node-renderer'

import CodeBox from '../code-box'

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
