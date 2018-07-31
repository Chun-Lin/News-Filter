import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { DEEP_GREY } from '../../../shared/constants'

const Location = ({ children, className }) => (
  <div className={className}>
    <FontAwesomeIcon icon="map-marker-alt" />
    <span className="location__font">{children}</span>
  </div>
)

const StyledLocation = styled(Location)`
  margin-right: 20px;

  .location__font {
    font-size: 16px;
    color: ${DEEP_GREY};
    margin-left: 7px;
  }
`

StyledLocation.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default StyledLocation
