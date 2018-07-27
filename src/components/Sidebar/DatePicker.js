import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dateFns from 'date-fns'

import { MEDIUM_GREY } from '../../assets/colors'

const DatePicker = ({ onChange, className }) => (
  <div className={className}>
    <input
      className="date-picker__input"
      type="date"
      value={dateFns.format(new Date(), 'YYYY-MM-DD')}
      onChange={onChange}
    />
  </div>
)

const StyledDatePicker = styled(DatePicker)`
  .date-picker__input {
    width: 169px;
    height: 40px;
    font-size: 16px;
    border: none;
    outline: none;

    &::-webkit-calendar-picker-indicator {
      font-size: 20px;
      color: ${MEDIUM_GREY};
      background-color: transparent;
    }
    &::-webkit-datetime-edit {
      padding: 11px;
    }

    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`

StyledDatePicker.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
}

export default StyledDatePicker
