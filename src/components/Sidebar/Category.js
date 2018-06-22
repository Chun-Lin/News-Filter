import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY, MEDIUM_GREY } from '../../constants/colors'
import Title from './Title'
import RadioOption from './RadioOption'

const CategoryLayout = styled.div`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
  padding: 25px 0;
  border-top: 3px solid ${MEDIUM_GREY};
`

const CategoryContentLayout = styled.div`
  margin-left: 40px;
`

const StyledList = styled.li`
  display: block;
  font-size: 16px;
`

class Category extends Component {
  state = {
    category: '',
  }

  handleChange(event) {
    this.setState({
      category: event.target.value,
    })
    this.props.onSelectCategory(event.target.value)
  }

  componentDidUpdate(prevState) {
    if (this.state.category !== prevState.category) {
      this.props.fetchNews()
    }
  }

  render() {
    const categories = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology',
    ]

    const radioOptions = categories.map(category => {
      const optionTitle = category.charAt(0).toUpperCase() + category.slice(1)

      return (
        <StyledList key={category}>
          <RadioOption
            value={category}
            checked={this.state.category === category}
            onChange={e => this.handleChange(e)}
          >
            {optionTitle}
          </RadioOption>
        </StyledList>
      )
    })

    return (
      <CategoryLayout>
        <CategoryContentLayout>
          <Title>Category</Title>
          {radioOptions}
        </CategoryContentLayout>
      </CategoryLayout>
    )
  }
}

Category.propTypes = {
  onSelectCategory: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default Category
