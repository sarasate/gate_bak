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
  margin-bottom: 1rem;
  margin-right: 50%;
  overflow: auto;
  padding: 0 28px;
  border-collapse: collapse;
`
const Element = styled.div``

const TableHead = styled.thead``
