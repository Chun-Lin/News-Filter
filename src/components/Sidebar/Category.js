import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { GREY, MEDIUM_GREY } from '../../constants/colors'
import Title from './Title'
import RadioOption from './RadioOption'

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
        <li className="category__list" key={category}>
          <RadioOption
            value={category}
            checked={this.state.category === category}
            onChange={e => this.handleChange(e)}
          >
            {optionTitle}
          </RadioOption>
        </li>
      )
    })

    const { className } = this.props
    return (
      <div className={className}>
        <div className="category__content--layout">
          <Title>Category</Title>
          {radioOptions}
        </div>
      </div>
    )
  }
}

const StyledCategory = styled(Category)`
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${GREY};
  padding: 25px 0;
  border-top: 3px solid ${MEDIUM_GREY};

  .category__content--layout {
    margin-left: 40px;

    .category__list {
      display: block;
      font-size: 16px;
    }
  }
`

StyledCategory.propTypes = {
  onSelectCategory: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default StyledCategory
