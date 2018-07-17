import React from 'react'
import PropTypes from 'prop-types'
import DatePicker from './DatePicker'
import styled from 'styled-components'
import Title from './Title'

import { GREY, MEDIUM_GREY } from '../../assets/colors'

const Date = ({ className }) => (
  <div className={className}>
    <div className="date--layout">
      <Title>Date</Title>
      <div className="date__from--layout">
        From
        <div className="date-picker--layout">
          <DatePicker />
        </div>
      </div>
      <div className="date__to--layout">
        To
        <div className="date-picker--layout">
          <DatePicker />
        </div>
      </div>
    </div>
  </div>
)

const StyledDate = styled(Date)`
  width: 300px;
  height: 187px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
  border-top: 3px solid ${MEDIUM_GREY};

  .date--layout {
    margin-left: 40px;

    .date__from--layout {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .date__to--layout {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 8px;
    }
  }

  .date-picker--layout {
    margin-left: 13px;
  }
`

Date.propTypes = {
  className: PropTypes.string,
}

export default StyledDate
