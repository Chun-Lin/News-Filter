import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import _ from 'lodash'

import { PURPLE } from '../assets/colors'
import SearchBar from '../components/Header/SearchBar'
import Logo from '../components/Header/Logo'

import { fetchNews } from '../store/actions/index'

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
  componentDidMount() {
    // this.props.fetchNews('bitcoin')
  }

  render() {
    const searchNews = _.debounce(value => {
      this.props.fetchNews(value)
    }, 300)

    return (
      <StyledHeader>
        <Logo />
        <SearchBar onSearchNews={searchNews} />
      </StyledHeader>
    )
  }
}

Header.propTypes = {}

const mapDispatchToProps = {
  fetchNews,
}

export default connect(
  null,
  mapDispatchToProps,
)(Header)
