import React from 'react'
import styled from 'styled-components'

const renderTOC = content =>
  content.headings.map(element => {
    if (element.depth === 1) {
      return (
        <Item key={element.value}>
          <Anchor href={`#${element.value.toLowerCase()}`}>
            {element.value}
          </Anchor>
        </Item>
      )
    }
  })

const TOC = ({ content }) => {
  return (
    <View>
      <List>{renderTOC(content)}</List>
    </View>
  )
}
export default TOC

const View = styled.div`
  bottom: 0;
  display: block;
  position: fixed;
  background-color: #2e3336;
  left: 0;
  overflow-y: auto;
  top: 0;
  width: 230px;
`

const List = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`

const Item = styled.li`
  color: white;
  display: list-item;
`
const Anchor = styled.a`
  line-height: 28px;
  padding: 0 15px 0 15px;
  display: block;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: #fff;
  transition-property: background;
  transition-timing-function: linear;
  transition-duration: 130ms;
`
