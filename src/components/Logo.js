import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE } from '../assets/colors'

const LayoutLogo = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 380px;
  height: 100%;
`

const StyledLogo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: ${WHITE};
`

const Logo = () => {
  return (
    <LayoutLogo>
      <StyledLogo>HaveNews</StyledLogo>
    </LayoutLogo>
  )
}

Logo.propTypes = {}

export default Logo
