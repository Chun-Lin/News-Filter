import React from 'react'
import PropTypes from 'prop-types'
import { PURPLE, WHITE, DEEP_PURPLE } from '../../assets/colors'
import styled from 'styled-components'

const ButtonLayout = styled.div`
  margin-left: 50px;
`

const StyledButton = styled.button`
  height: 40px;
  text-align: center;
  font-size: 20px;
  color: ${WHITE};
  background-color: ${PURPLE};
  border: 3px solid ${WHITE};
  outline: none;
  box-sizing: border-box;

  &:active {
    background-color: ${DEEP_PURPLE};
  }
`

const Button = ({ onClick }) => (
  <ButtonLayout>
    <StyledButton onClick={onClick}>Search</StyledButton>
  </ButtonLayout>
)

Button.propTypes = {
  onClick: PropTypes.func,
}

export default Button
