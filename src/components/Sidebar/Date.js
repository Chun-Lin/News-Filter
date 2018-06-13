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
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
  border-top: 3px solid ${MEDIUM_GREY};
`

const DateWrapper = styled.div`
  margin-left: 40px;
`

const DateFromWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const DateToWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`

const DatePickerWrapper = styled.div`
  margin-left: 13px;
`

const Date = () => {
  return (
    <LayoutDate>
      <DateWrapper>
        <Title>Date</Title>
        <DateFromWrapper>
          From
          <DatePickerWrapper>
            <DatePicker />
          </DatePickerWrapper>
        </DateFromWrapper>
        <DateToWrapper>
          To
          <DatePickerWrapper>
            <DatePicker />
          </DatePickerWrapper>
        </DateToWrapper>
      </DateWrapper>
    </LayoutDate>
  )
}

Date.propTypes = {}

export default Date
