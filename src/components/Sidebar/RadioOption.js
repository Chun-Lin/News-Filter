import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RadioOption = ({ checked, onChange, value, children }) => (
  <label>
    <input
      className="input__radio--layout"
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
    />
    {children}
  </label>
)

const StyledRadioOption = styled(RadioOption)`
  .input__radio--layout {
    margin-right: 8px;
  }
`

StyledRadioOption.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
}

export default StyledRadioOption
