import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import 'react-dates/initialize'
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

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
        <DateRangePicker
          orientation="vertical"
          horizontalMargin={100}
          date={this.state.date}
          onDateChange={date => this.setState({ date })}
        />
      </div>
    )
  }
}

export default DatePicker
