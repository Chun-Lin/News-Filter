import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE } from '../assets/colors'

const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Explore your own activities',
})`
  width: 232px;
  color: ${WHITE};
  font-size: 20px;
  border: 0;
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: ${WHITE};
    opacity: 0.5;
    font-size: 20px;
    font-style: Italic;
  }
`

const StyledLabel = styled.div`
  width: 388px;
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 2px solid ${WHITE};
`

const SearchBar = () => {
  return (
    <StyledLabel>
      <StyledInput />
    </StyledLabel>
  )
}

SearchBar.propTypes = {}

export default SearchBar
