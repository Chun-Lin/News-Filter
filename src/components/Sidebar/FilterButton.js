import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../assets/colors'

const FilterButtonLayout = styled.div`
  margin-top: 50px;
  align-self: flex-end;
`

const StyledButton = styled.button`
  height: 30px;
  color: white;
  background-color: ${PURPLE};
`

const FilterButton = ({ children }) => {
  return (
    <FilterButtonLayout>
      <StyledButton>{children}</StyledButton>
    </FilterButtonLayout>
  )
}

FilterButton.propTypes = {
  children: PropTypes.node,
}

export default FilterButton
