import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PURPLE } from '../../assets/colors'
import SearchBar from '../Header/SearchBar'
import Logo from '../Header/Logo'

const StyledHeader = styled.div`
  width: 100%;
  height: 92px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${PURPLE};
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
    </StyledHeader>
  )
}

Header.propTypes = {}

export default Header
