import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WHITE } from '../assets/colors'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Explore your own activities',
})`
  width: 300px;
  color: ${WHITE};
  font-size: 20px;
  margin: 1px;
  margin-left: 20px;
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

const StyledSearchIcon = styled(FontAwesomeIcon)`
  margin-bottom: 1px;
  font-size: 20px;
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
      <StyledSearchIcon icon={['fas', 'search']} color="white" />
      <StyledInput />
    </StyledLabel>
  )
}

SearchBar.propTypes = {}

export default SearchBar
