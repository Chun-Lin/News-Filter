import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { bounceIn } from 'react-animations'
import { PURPLE, WHITE } from '../../../assets/colors'

const BounceIn = keyframes`${bounceIn}`

const ScaleKeyframe = keyframes`
  0%{
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50%{
    opacity: 0.9;
    transform: scale(1.1);
  }
  80%{
    opacity: 1;
    transform: scale(0.89);
  }
  100%{
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`

const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: ${PURPLE};
  border-radius: 5px;
  box-sizing: border-box;
  animation: ${BounceIn} 1.5s 0s infinite;
`

const Logo = styled.span`
  font-size: 30px;
  font-weight: 900;
  height: 50px;
  line-height: 50px;
  color: ${WHITE};
  animation: ${BounceIn} 1.5s 0s infinite;
`

const Loading = () => {
  return (
    <Background>
      <Logo>N</Logo>
    </Background>
  )
}

Loading.propTypes = {}

export default Loading
