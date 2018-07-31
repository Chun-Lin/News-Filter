import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, MEDIUM_GREY } from '../../../shared/constants'

const Category = ({ children, className }) => (
  <div className={className}>
    <div className="category__font">{children}</div>
  </div>
)

const StyledCategory = styled(Category)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 12px;
  padding: 3px 10px;
  background-color: ${MEDIUM_GREY};

  .category__font {
    font-size: 16px;
    font-style: italic;
    color: ${WHITE};
  }
`

Category.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default StyledCategory
