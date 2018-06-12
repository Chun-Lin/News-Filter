import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/Header/Header';

const StyledMain = styled.main`
  margin-top: 92px;
`

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Header />
        <StyledMain>{children}</StyledMain>
      </Fragment>
    )
  }
}
