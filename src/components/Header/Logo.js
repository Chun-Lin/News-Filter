import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE } from '../../constants/colors'

const Logo = ({ children, className }) => (
  <div className={className}>
    <div className="logo__item">{children}</div>
  </div>
)

const StyledLogo = styled(Logo)`
  display: inline-block;
  vertical-align: top;
  width: 380px;
  height: 100%;

  .logo__item {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: ${WHITE};
  }
`

Logo.propTypes = {
  children: PropTypes.node,
}

export default StyledLogo
