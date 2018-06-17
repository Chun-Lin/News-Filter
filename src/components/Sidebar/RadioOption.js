import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, PURPLE, GREY, DEEP_GREY } from '../../assets/colors'

const RadioOptionWrapper = styled.div`
  position: relative;
  height: 16px;
  line-height: 16px;
  margin-bottom: 11px;
`

const StyledInput = styled.input.attrs({
  type: 'radio',
  name: 'test1',
})`
  visibility: hidden;
`

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  border: 2px solid ${DEEP_GREY};
  background-color: ${props => (props.checked ? PURPLE : 'transparent')};
  cursor: pointer;
  margin-right: 6px;

  ${'' /* &:after {
    content: '';
    position: absolute;
    top: 4px;
    left: 3px;
    width: 7px;
    height: 3px;
    border: 3px solid ${WHITE};
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);

    opacity: ${props => (props.checked ? '1' : '0')};
  } */};
`

const RadioOption = ({ name, checked, onChange, value, children }) => {
  return (
    <RadioOptionWrapper>
      <StyledInput
        name={name}
        onChange={onChange}
        checked={checked}
        value={value}
      />
      <StyledLabel checked={checked} />
      {children}
    </RadioOptionWrapper>
  )
}

RadioOption.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default RadioOption
