import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { bounceIn } from 'react-animations'
import { PURPLE, WHITE } from '../../../constants/colors'

const Loading = ({ className }) => (
  <div className={className}>
    <span className="loading__logo">N</span>
  </div>
)

const BounceIn = keyframes`${bounceIn}`

const StyledLoading = styled(Loading)`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${PURPLE};
  border-radius: 5px;
  box-sizing: border-box;
  animation: ${BounceIn} 1.5s 0s infinite;

  .loading__logo {
    font-size: 30px;
    font-weight: 900;
    height: 50px;
    line-height: 50px;
    color: ${WHITE};
    animation: ${BounceIn} 1.5s 0s infinite;
  }
`

StyledLoading.propTypes = {
  className: PropTypes.string,
}

export default StyledLoading
