import Blockquote from './components/blockquote'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableRow,
} from './components/table'
import styled from 'styled-components'

const Heading1 = styled.h1`
  background-color: white;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid silver;
  box-sizing: border-box;
  clear: both;
  display: block;
  font-size: 25px;
  line-height: normal;
  padding: 0.5em 28px;
  margin-bottom: 21px;
  margin-right: 50%;
  margin-top: 2em;
  width: 50%;
  &:first-child {
    margin-top: 0;
    border-top-width: 0;
  }
`

const Heading2 = styled.h2`
  padding: 0.5em 28px;
`
const Heading3 = styled.h3`
  font-size: 15px;
  margin-top: 2.5em;
  margin-bottom: 0.8em;
  padding: 0.5em 28px;
`

const Paragraph = styled.p`
  display: block;
  box-sizing: border-box;
  padding: 0 28px;
  width: 50%;
  ${Blockquote} & {
    width: 100%;
  }
`

const Aside = styled.aside`
  background: ${({ className }) =>
    className.includes('warning')
      ? '#c97a7e'
      : className.includes('success')
      ? '#6ac174'
      : 'rgb(143, 188, 212)'};
  padding: 1em 28px;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  line-height: 1.6;
  margin-right: 50%;
  box-sizing: border-box;
  display: block;
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
const Link = styled.a.attrs(() => ({
  target: '_blank',
}))``

const Div = styled.div`
  background-color: #1e2123;
  clear: right;
  color: #fff;
  display: ${({ active }) => (active ? 'block' : 'none')};
  box-sizing: border-box;
  float: right;
  margin: 0;
  padding: 2em 28px;
  width: 50%;
  overflow: auto;
`
const Pre = styled.pre`
  background-color: #1e2123 !important;
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
  ${Paragraph} &,  ${Aside} & {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2px;
    color: rgb(51, 51, 51);
    display: inline;
    font-size: 12px;
    font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
      serif;
    padding: 4px;
  }
`

const Default = styled.div`
  padding: 0.5em 28px;
  width: 50%;
`

export const Nodes = {
  a: Link,
  aside: Aside,
  blockquote: Blockquote,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  p: Paragraph,
  code: Code,
  div: Div,
  pre: Pre,
  notice: Notice,
  success: Success,
  warning: Warning,
  span: Span,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  th: TableHeading,
  tr: TableRow,
  td: TableCell,
  default: Default,
}
