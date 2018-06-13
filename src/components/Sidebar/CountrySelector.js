import React from 'react'
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

const CountrySelector = () => {
  const options = countryList().getData()
  console.log(options)
  return <Select styles={customStyles} options={options} />
}

Select.propTypes = {}

export default CountrySelector
