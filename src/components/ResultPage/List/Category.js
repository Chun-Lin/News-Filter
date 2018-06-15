import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, MEDIUM_GREY } from '../../../assets/colors'

const CategoryLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 24px;
  border-radius: 12px;
  background-color: ${MEDIUM_GREY};
`

const StyledFont = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${WHITE};
`

const Category = ({ children }) => {
  return (
    <CategoryLayout>
      <StyledFont>{children}</StyledFont>
    </CategoryLayout>
  )
}

Category.propTypes = {
  children: PropTypes.node,
}

export default Category
