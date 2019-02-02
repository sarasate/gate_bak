import styled from 'styled-components'

export const Div = styled.div`
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
