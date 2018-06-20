import React, { Component } from 'react'
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

const StyledInput = styled.input`
  margin-right: 8px;
`

const StyledList = styled.li`
  display: block;
  font-size: 16px;
`

const StyledUlist = styled.ul`
  padding: 0;
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
    return (
      <LayoutCategory>
        <CategoryWrapper>
          <Title>Category</Title>
          <StyledUlist>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="business"
                  checked={this.state.category === 'business'}
                  onChange={e => this.handleChange(e)}
                />
                Business
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="entertainment"
                  checked={this.state.category === 'entertainment'}
                  onChange={e => this.handleChange(e)}
                />
                Entertainment
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="general"
                  checked={this.state.category === 'general'}
                  onChange={e => this.handleChange(e)}
                />
                General
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="health"
                  checked={this.state.category === 'health'}
                  onChange={e => this.handleChange(e)}
                />
                Health
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="science"
                  checked={this.state.category === 'science'}
                  onChange={e => this.handleChange(e)}
                />
                Science
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="sports"
                  checked={this.state.category === 'sports'}
                  onChange={e => this.handleChange(e)}
                />
                Sports
              </label>
            </StyledList>
            <StyledList>
              <label>
                <StyledInput
                  type="radio"
                  value="technology"
                  checked={this.state.category === 'technology'}
                  onChange={e => this.handleChange(e)}
                />
                Technology
              </label>
            </StyledList>
          </StyledUlist>
        </CategoryWrapper>
      </LayoutCategory>
    )
  }
}

Category.propTypes = {}

export default Category
