import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const StyledDatePicker = styled.input`
  width: 169px;
  height: 40px;
  font-size: 16px;
  border: none;
  outline: none;
`
class DatePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <div>
        <StyledDatePicker type="date" placeholder="Start Date" required/>
      </div>
    )
  }
}

export default DatePicker
