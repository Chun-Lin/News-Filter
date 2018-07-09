import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { WHITE } from '../../constants/colors'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

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
    const { className } = this.props

    return (
      <div className={className}>
        <div className="searchbar__items--layout">
          <div className="searchbar__items--style">
            <FontAwesomeIcon
              className="searchbar__icon"
              icon={['fas', 'search']}
              color="white"
            />
            <input
              className="searchbar__input"
              type="text"
              placeholder="Explore your own news"
              value={this.state.value}
              onChange={event => this.changeHandler(event)}
            />
          </div>
        </div>
      </div>
    )
  }
}

const StyledSearchBar = styled(SearchBar)`
  vertical-align: top;
  display: inline-block;
  width: calc(100% - 380px);
  height: 100%;
  justify-content: flex-start;
  align-items: center;

  .searchbar__items--layout {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .searchbar__items--style {
      width: 388px;
      background-color: transparent;
      box-sizing: border-box;
      border-bottom: 2px solid ${WHITE};

      .searchbar__icon {
        margin-bottom: 2px;
        font-size: 20px;
      }

      .searchbar__input {
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
      }
    }
  }
`

SearchBar.propTypes = {
  onQuerySearch: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default StyledSearchBar
