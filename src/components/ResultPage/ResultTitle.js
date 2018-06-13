import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../assets/colors'

const StyledTitle = styled.div`
  margin-top: 24px;
  font-size: 24px;
`

const StyledCount = styled.span`
  color: ${PURPLE};
  font-weight: bold;
`

const ResultTitle = ({ resultCount }) => {
  return (
    <StyledTitle>
      <span>
        Showing <StyledCount>{resultCount}</StyledCount> results by...
      </span>
    </StyledTitle>
  )
}

ResultTitle.propTypes = {
  resultCount: PropTypes.number,
}

export default ResultTitle
