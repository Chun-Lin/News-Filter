import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, PURPLE } from '../../../constants/colors'

const Layout = styled.div`
  width: 41px;
  height: 42px;
  margin-left: 1px;
  background-color: ${WHITE};
  cursor: pointer;
`

const StyledItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${PURPLE};
`

class PaginationItem extends Component {
  clickHandler = () => {
    const { page, onSelectPage, fetchNews } = this.props
    onSelectPage(page)
    fetchNews()
  }

  render() {
    const { children } = this.props
    return (
      <Layout>
        <StyledItem onClick={this.clickHandler}>{children}</StyledItem>
      </Layout>
    )
  }
}

PaginationItem.propTypes = {
  children: PropTypes.node,
  page: PropTypes.number,
  onSelectPage: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default PaginationItem
