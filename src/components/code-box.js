import React from 'react'
import styled from 'styled-components'

import LanguageSelector from './language-selector'

const CodeBox = ({ content }) => {
  const languages = content.content.frontmatter.language_tabs
  return (
    <View>
      <LanguageSelector languages={languages} />
    </View>
  )
}

export default CodeBox

const View = styled.div`
  background-color: #2e3336;
  bottom: 0;
  display: block;
  position: absolute;
  right: 0;
  -moz-text-size-adjust: 100%;
  top: 0;
  width: 50%;
  z-index: -1;
`
