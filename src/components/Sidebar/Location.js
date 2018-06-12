import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY } from '../../assets/colors';
import CountrySelector from './CountrySelector';
import countryList from 'country-list'

const LayoutLocation = styled.div`
  width: 300px;
  height: 127px;
  padding-top: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GREY};
`

const StyledTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: 'Roboto-Bold', sans-serif;
`

const Loaction = () => {
  // const options = countryList().getName('IS')
  // console.log(options)

  return (
    <LayoutLocation>
      <div>
        <StyledTitle>Location</StyledTitle>
        <CountrySelector />
      </div>
    </LayoutLocation>
  )
}



Loaction.propTypes = {



}

export default Loaction
