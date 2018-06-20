import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import countryList from 'country-list'
import Select from 'react-select'

const customStyles = {
  control: styles => ({
    ...styles,
    width: 220,
    borderRadius: 0,
    borderColor: 'white',
    backgroundColor: 'white',
    boxShadow: '0 0 0 1px white',

    ':hover': {
      borderColor: 'white',
    },
  }),
  input: styles => ({
    ...styles,
    borderRadius: 0,
  }),
  menu: styles => ({
    ...styles,
    marginTop: 0,
    borderRadius: 0,
  }),
}

class CountrySelector extends Component {
  constructor(props) {
    super(props)

    this.options = countryList().getData()

    this.state = {
      options: this.options,
      value: null,
    }
  }

  changeHandler = value => {
    this.setState({ value })
    this.props.onSelectCountry(value)
  }

  componentDidUpdate(prevState) {
    if (this.state.value !== prevState.value) {
      this.props.fetchNews()
    }
  }

  render() {
    const { onSelectCountry } = this.props

    const options = countryList().getData()
    return (
      <Select
        styles={customStyles}
        options={this.state.options}
        value={this.state.value}
        onChange={this.changeHandler}
      />
    )
  }
}

Select.propTypes = {}

export default CountrySelector
