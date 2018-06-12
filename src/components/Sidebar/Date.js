import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'
import styled from 'styled-components'
import Title from './Title'

import { GREY, MEDIUM_GREY } from '../../assets/colors'
const LayoutDate = styled.div`
  width: 300px;
  height: 187px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GREY};
  border-top: 3px solid ${MEDIUM_GREY};
`

const StyledDatePicker = styled(DatePicker)`
  &:before {
    content: 'From';
  }
`

const Date = () => {
  return (
    <LayoutDate>
      <div>
        <Title>Date</Title>
        <div>
          <div>
            <StyledDatePicker />
          </div>
        </div>
      </div>
    </LayoutDate>
  )
}

Date.propTypes = {}

export default Date
