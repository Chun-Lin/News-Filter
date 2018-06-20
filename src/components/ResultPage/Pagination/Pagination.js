import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PaginationLayout from './PaginationLayout'
import PaginationItem from './PaginationItem'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class Pagination extends Component {
  render() {
    const { pageCount, onSelectPage, fetchNews } = this.props

    let page = 1
    let paginationItems = []
    for (page; page <= pageCount; page++) {
      paginationItems.push(page)
    }

    return (
      <PaginationLayout>
        <PaginationItem
          page={1}
          onSelectPage={onSelectPage}
          fetchNews={fetchNews}
        >
          <FontAwesomeIcon icon="angle-double-left" />
        </PaginationItem>
        {paginationItems.map(page => {
          return (
            <PaginationItem
              key={page}
              page={page}
              onSelectPage={onSelectPage}
              fetchNews={fetchNews}
            >
              {page}
            </PaginationItem>
          )
        })}
        <PaginationItem
          page={Number(paginationItems[paginationItems.length - 1])}
          onSelectPage={onSelectPage}
          fetchNews={fetchNews}
        >
          <FontAwesomeIcon icon="angle-double-right" />
        </PaginationItem>
      </PaginationLayout>
    )
  }
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  pageSelector: PropTypes.func,
}

export default Pagination
