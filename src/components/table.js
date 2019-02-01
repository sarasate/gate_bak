import React from 'react'
import styled from 'styled-components'

const renderSegment = element =>
  element.children.map(segment => (
    <Element as={segment.tagName}>{renderRow(segment)}</Element>
  ))

const renderRow = element =>
  element.children.map(row => (
    <Element as={row.tagName}>{renderCell(row)}</Element>
  ))

const renderCell = element =>
  element.children.map(cell => (
    <Element as={cell.tagName}>{cell.children[0].value}</Element>
  ))

const Component = ({ element }) => {
  return <Table>{renderSegment(element)}</Table>
}

export default Component

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  box-sizing: border-box;
  display: block;
  margin-bottom: 1rem;
  margin-right: 50%;
  overflow: auto;
  padding: 0 28px;
`
const Element = styled.div`
  background-color: ${({ as }) => (as === 'tbody' ? 'white' : 'inherit')};
  padding: ${({ as }) => (as === 'td' ? '10px' : 0)};
`

const TableHead = styled.thead``
