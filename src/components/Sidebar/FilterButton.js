import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE, GREY, DEEP_GREY, DEEP_PURPLE } from '../../assets/colors'

const FilterButtonLayout = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${GREY};
`

const StyledButton = styled.button`
  width: 220px;
  height: 50px;
  font-size: 20px;
  color: white;
  background-color: ${PURPLE};
  outline: none;

  &:active {
    background-color: ${DEEP_PURPLE};
  }
`

const FilterButton = ({ onClick, children }) => {
  return (
    <FilterButtonLayout>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </FilterButtonLayout>
  )
}

FilterButton.propTypes = {
  children: PropTypes.node,
}

export default FilterButton
