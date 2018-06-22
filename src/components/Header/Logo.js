import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE } from '../../assets/colors'

const LogoLayout = styled.div`
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

const Logo = ({ children }) => (
  <LogoLayout>
    <StyledLogo>{children}</StyledLogo>
  </LogoLayout>
)

Logo.propTypes = {
  children: PropTypes.node,
}

export default Logo
