import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
  margin-right: 8px;
`

const RadioOption = ({ checked, onChange, value, children }) => (
  <label>
    <StyledInput
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {children}
  </label>
)

RadioOption.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default RadioOption
