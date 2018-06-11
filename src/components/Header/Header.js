import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PURPLE } from '../../assets/colors'

const StyledHeader = styled.div`
  width: 100%;
  height: 92px;
  background-color: ${PURPLE};
`

const Header = () => {
  return <StyledHeader />
}

Header.propTypes = {}

export default Header
