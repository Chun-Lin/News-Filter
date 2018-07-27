import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../constants/colors'

const ResultCount = ({ resultCount, className }) => (
  <div className={className}>
    <span className="result-count__font--size">
      Showing{' '}
      <span className="result-count__font--color-weight">{resultCount}</span>{' '}
      results by...
    </span>
  </div>
)

const StyledResultCount = styled(ResultCount)`
  margin-top: 24px;

  .result-count__font--size {
    font-size: 24px;

    .result-count__font--color-weight {
      color: ${PURPLE};
      font-weight: bold;
    }
  }
`

StyledResultCount.propTypes = {
  resultCount: PropTypes.number,
  className: PropTypes.string
}

export default StyledResultCount
