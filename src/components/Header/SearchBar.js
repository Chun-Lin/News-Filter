import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WHITE } from '../../assets/colors'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const SearchBarLayout = styled.div`
  vertical-align: top;
  display: inline-block;
  width: calc(100% - 380px);
  height: 100%;
  justify-content: flex-start;
  align-items: center;
`

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const StyledSearchBar = styled.div`
  width: 388px;
  background-color: transparent;
  box-sizing: border-box;
  border-bottom: 2px solid ${WHITE};
`

const StyledInput = styled.input.attrs({
  type: 'text',
  placeholder: 'Explore your own news',
})`
  width: 348px;
  color: ${WHITE};
  font-size: 20px;
  padding: 0;
  margin-bottom: 5.5px;
  margin-left: 20px;
  border: 0;
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: ${WHITE};
    opacity: 0.5;
    font-size: 20px;
    font-style: Italic;
  }
`

const StyledSearchIcon = styled(FontAwesomeIcon)`
  margin-bottom: 2px;
  font-size: 20px;
`

class SearchBar extends Component {
  state = {
    value: '',
  }

  changeHandler = event => {
    this.setState({ value: event.target.value })
    this.props.onQuerySearch(event.target.value)
  }

  componentDidUpdate(prevState) {
    if (this.state.value !== prevState.value) {
      this.props.fetchNews()
    }
  }

  render() {
    return (
      <SearchBarLayout>
        <ContentLayout>
          <StyledSearchBar>
            <StyledSearchIcon icon={['fas', 'search']} color="white" />
            <StyledInput
              value={this.state.value}
              onChange={event => this.changeHandler(event)}
            />
          </StyledSearchBar>
        </ContentLayout>
      </SearchBarLayout>
    )
  }
}

SearchBar.propTypes = {
  onQuerySearch: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default SearchBar
