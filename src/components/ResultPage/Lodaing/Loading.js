import React from 'react'
import styled, { keyframes } from 'styled-components'
import { bounceIn } from 'react-animations'
import { PURPLE, WHITE } from '../../../assets/colors'

const BounceIn = keyframes`${bounceIn}`

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

const Loading = () => (
  <Background>
    <Logo>N</Logo>
  </Background>
)

export default Loading
