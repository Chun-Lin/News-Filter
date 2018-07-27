import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY } from '../../constants/colors'
import CountrySelector from './CountrySelector'
import Title from './Title'

const Location = ({ onSelectCountry, fetchNews, className }) => (
  <div className={className}>
    <div className="location__content--layout">
      <Title>Location</Title>
      <CountrySelector
        onSelectCountry={onSelectCountry}
        fetchNews={fetchNews}
      />
    </div>
  </div>
)

const StyledLocation = styled(Location)`
  width: 300px;
  height: 127px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};

  .location__content--layout {
    margin-left: 40px;
  }
`

StyledLocation.propTypes = {
  onSelectCountry: PropTypes.func,
  fetchNews: PropTypes.func,
  className: PropTypes.string,
}

export default StyledLocation
