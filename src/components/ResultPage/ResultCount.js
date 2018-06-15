import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../assets/colors'

const Layout = styled.div`
  margin-top: 24px;
`

const StyledFont = styled.span`
  font-size: 24px;
`

const StyledCount = styled.span`
  color: ${PURPLE};
  font-weight: bold;
`

const ResultCount = ({ resultCount }) => {
  return (
    <Layout>
      <StyledFont>
        Showing <StyledCount>{resultCount}</StyledCount> results by...
      </StyledFont>
    </Layout>
  )
}

ResultCount.propTypes = {
  resultCount: PropTypes.number,
}

export default ResultCount
