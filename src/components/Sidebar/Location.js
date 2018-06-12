import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY } from '../../assets/colors'
import CountrySelector from './CountrySelector'
import Title from './Title'

const LayoutLocation = styled.div`
  width: 300px;
  height: 127px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
`

const LocationWrapper = styled.div`
  margin-left: 40px;
`

const Loaction = () => {
  // const options = countryList().getName('IS')
  // console.log(options)

  return (
    <LayoutLocation>
      <LocationWrapper>
        <Title>Location</Title>
        <CountrySelector />
      </LocationWrapper>
    </LayoutLocation>
  )
}

Loaction.propTypes = {}

export default Loaction
