import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY, MEDIUM_GREY } from '../../assets/colors'
import Title from './Title'
import RadioOption from './RadioOption'

const LayoutCategory = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
  padding: 25px 0;
  border-top: 3px solid ${MEDIUM_GREY};
`

const CategoryWrapper = styled.div`
  margin-left: 40px;
`

const Category = () => {
  return (
    <LayoutCategory>
      <CategoryWrapper>
        <Title>Categories</Title>
        <RadioOption checked>Business</RadioOption>
        <RadioOption checked>Entertainment</RadioOption>
        <RadioOption checked>General</RadioOption>
        <RadioOption checked>Health</RadioOption>
        <RadioOption checked>Science</RadioOption>
        <RadioOption checked>Sports</RadioOption>
        <RadioOption checked>Technology</RadioOption>
      </CategoryWrapper>
    </LayoutCategory>
  )
}

Category.propTypes = {}

export default Category
