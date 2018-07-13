import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'

import { PURPLE } from '../constants/colors'
import SearchBar from '../components/Header/SearchBar'
import Logo from '../components/Header/Logo'

import { querySearch, fetchNews, query } from '../store/actions/index'

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
      this.props.query('searchTerm', value)
    }, 300)

    const debounceFetchNews = _.debounce(() => this.props.fetchNews(), 300)

    return (
      <StyledHeader>
        <Logo>HaveNews</Logo>
        <SearchBar onQuerySearch={searchNews} fetchNews={debounceFetchNews} />
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  querySearch: PropTypes.func,
  fetchNews: PropTypes.func,
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      query,
      fetchNews,
    },
    dispatch,
  )

export default connect(
  null,
  mapDispatchToProps,
)(Header)
