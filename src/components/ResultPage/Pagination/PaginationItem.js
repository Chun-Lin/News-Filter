import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { WHITE, PURPLE } from '../../../constants/colors'

class PaginationItem extends Component {
  clickHandler = () => {
    const { page, onSelectPage, fetchNews } = this.props
    onSelectPage(page)
    fetchNews()
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={className}>
        <div className="pagination__item" onClick={this.clickHandler}>
          {children}
        </div>
      </div>
    )
  }
}

const StyledPaginationItem = styled(PaginationItem)`
  width: 41px;
  height: 42px;
  margin-left: 1px;
  background-color: ${WHITE};
  cursor: pointer;

  .pagination__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: ${PURPLE};
  }
`

StyledPaginationItem.propTypes = {
  children: PropTypes.node,
  page: PropTypes.number,
  onSelectPage: PropTypes.func,
  fetchNews: PropTypes.func,
  className: PropTypes.string,
}

export default StyledPaginationItem
