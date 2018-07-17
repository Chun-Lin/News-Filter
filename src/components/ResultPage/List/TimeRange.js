import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { DEEP_GREY } from '../../../constants/colors'

const TimeRange = ({ children, className }) => (
  <div className={className}>
    <FontAwesomeIcon icon="calendar-alt" />
    <span className="time__font">{children}</span>
  </div>
)

const StyledTimeRange = styled(TimeRange)`
  margin-right: 20px;

  .time__font {
    font-size: 16px;
    color: ${DEEP_GREY};
    margin-left: 7px;
  }
`

TimeRange.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default StyledTimeRange
