import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from '../components/Header/Header'
import { LIGHT_GREY } from '../assets/colors'

const StyledMain = styled.main`
  margin-top: 92px;
  height: 100%;
  background-color: ${LIGHT_GREY};
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
