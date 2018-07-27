import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE, GREY, DEEP_PURPLE } from '../../constants/colors'


const FilterButton = ({ onClick, children, className }) => (
  <div className={className}>
    <button className="filter-button__button" onClick={onClick}>
      {children}
    </button>
  </div>
)

const StyledFilterButton = styled(FilterButton)`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GREY};

  .filter-button__button {
    width: 220px;
    height: 50px;
    font-size: 20px;
    color: white;
    background-color: ${PURPLE};
    outline: none;

    &:active {
      background-color: ${DEEP_PURPLE};
    }
  }
`

StyledFilterButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default StyledFilterButton
