import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import _ from 'lodash'

import { PURPLE } from '../assets/colors'
import SearchBar from '../components/Header/SearchBar'
import Logo from '../components/Header/Logo'

import { querySearch, fetchNews } from '../store/actions/index'
import Button from '../components/Header/Button'

const StyledHeader = styled.div`
  width: 100%;
  height: 92px;
  top: 0;
  left: 0;
  position: fixed;
  background-color: ${PURPLE};
  z-index: 9999;
`

class Header extends Component {
  render() {
    const searchNews = _.debounce(value => {
      this.props.querySearch(value)
    }, 300)

    const debounceFetchNews = _.debounce(() => this.props.fetchNews(), 300)

    return (
      <StyledHeader>
        <Logo />
        <SearchBar onQuerySearch={searchNews} fetchNews={debounceFetchNews} />
      </StyledHeader>
    )
  }
}

Header.propTypes = {}

const mapDispatchToProps = {
  querySearch,
  fetchNews,
}

export default connect(
  null,
  mapDispatchToProps,
)(Header)
