import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PURPLE } from '../../assets/colors'
import SearchBar from '../SearchBar'

const StyledHeader = styled.div`
  width: 100%;
  height: 92px;
  background-color: ${PURPLE};
`

const Header = () => {
  return (
    <StyledHeader>
      <SearchBar />
    </StyledHeader>
  )
}

Header.propTypes = {}

export default Header
