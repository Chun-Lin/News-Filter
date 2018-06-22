import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, MEDIUM_GREY } from '../../../constants/colors'

const CategoryLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  border-radius: 12px;
  padding: 3px 10px;
  background-color: ${MEDIUM_GREY};
`

const StyledFont = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${WHITE};
`

const Category = ({ children }) => (
  <CategoryLayout>
    <StyledFont>{children}</StyledFont>
  </CategoryLayout>
)

Category.propTypes = {
  children: PropTypes.node,
}

export default Category
