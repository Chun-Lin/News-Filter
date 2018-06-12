import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WHITE } from '../assets/colors'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Explore your own news',
})`
  width: 348px;
  color: ${WHITE};
  font-size: 20px;
  padding: 0;
  margin-bottom: 5.5px;
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
  margin-bottom: 2px;
  font-size: 20px;
`
const LayoutBlock = styled.div`
  vertical-align: top;
  display: inline-block;
  width: calc(100vw - 380px);
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`

const SearchBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledSearchBar = styled.div`
  width: 388px;
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 2px solid ${WHITE};
`

const SearchBar = () => {
  return (
    <LayoutBlock>
      <SearchBarWrapper>
        <StyledSearchBar>
          <StyledSearchIcon icon={['fas', 'search']} color="white" />
          <StyledInput />
        </StyledSearchBar>
      </SearchBarWrapper>
    </LayoutBlock>
  )
}

SearchBar.propTypes = {}

export default SearchBar