import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY } from '../../constants/colors'
import CountrySelector from './CountrySelector'
import Title from './Title'

const LocationLayout = styled.div`
  width: 300px;
  height: 127px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
`

const LocationContentLayout = styled.div`
  margin-left: 40px;
`

const Loaction = ({ onSelectCountry, fetchNews }) => (
  <LocationLayout>
    <LocationContentLayout>
      <Title>Location</Title>
      <CountrySelector
        onSelectCountry={onSelectCountry}
        fetchNews={fetchNews}
      />
    </LocationContentLayout>
  </LocationLayout>
)

Loaction.propTypes = {
  onSelectCountry: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default Loaction
