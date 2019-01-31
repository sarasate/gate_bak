import React from 'react'
import styled from 'styled-components'

const toggleActive = (e, language) => {
  if (typeof window !== 'undefined') window.language = language
}

const LanguageSelector = ({ languages }) => {
  if (typeof window === 'undefined') return null
  if (!window.language) window.language = languages[0]
  return (
    <View>
      {languages.map(language => (
        <Item
          href="#"
          key={language}
          active={language === window.language}
          onClick={e => toggleActive(e, language)}
        >
          {language}
        </Item>
      ))}
    </View>
  )
}

export default LanguageSelector

const View = styled.div`
  background-color: #1e2224;
  display: block;
  position: fixed;
  width: 100%;
  z-index: 50;
`

const Item = styled.a`
  display: block;
  float: left;
  font-size: 14px;
  background-color: ${({ active }) => (active ? '#2e3336' : 'inherit')};
  color: #fff;
  text-decoration: none;
  padding: 0 10px;
  line-height: 30px;
  outline: 0;
  &:active,
  &:focus {
    background-color: #2e3336;
  }
`
