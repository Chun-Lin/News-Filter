import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, PURPLE } from '../../assets/colors'

const CheckboxWrapper = styled.div`
  position: relative;
  height: 16px;
  line-height: 16px;
  margin-bottom: 11px;
`

const StyledInput = styled.input.attrs({
  type: 'checkbox',
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
  background-color: ${PURPLE};
  cursor: pointer;
  margin-right: 6px;

  &:after {
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
  }
`

const Checkbox = ({ name, checked, onChange, children }) => {
  return (
    <CheckboxWrapper>
      <StyledInput
        type="checkbox"
        name={name}
        onChange={onChange}
        checked={checked}
      />
      <StyledLabel checked={checked} />
      {children}
    </CheckboxWrapper>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default Checkbox
