import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { DEEP_GREY } from '../../../assets/colors'

const Layout = styled.div`
  margin-right: 20px;
`

const GreyInfo = styled.span`
  font-size: 16px;
  color: ${DEEP_GREY};
  margin-left: 7px;
`

const TimeRange = ({ children }) => {
  return (
    <Layout>
      <FontAwesomeIcon icon="calendar-alt" />
      <GreyInfo>{children}</GreyInfo>
    </Layout>
  )
}

TimeRange.propTypes = {
  children: PropTypes.node,
}

export default TimeRange
