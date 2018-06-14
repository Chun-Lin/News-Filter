import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY, MEDIUM_GREY } from '../../assets/colors'
import Title from './Title'
import Checkbox from './Checkbox'

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
        <Checkbox checked>Business</Checkbox>
        <Checkbox checked>Entertainment</Checkbox>
        <Checkbox checked>General</Checkbox>
        <Checkbox checked>Health</Checkbox>
        <Checkbox checked>Science</Checkbox>
        <Checkbox checked>Sports</Checkbox>
        <Checkbox checked>Technology</Checkbox>
      </CategoryWrapper>
    </LayoutCategory>
  )
}

Category.propTypes = {}

export default Category
