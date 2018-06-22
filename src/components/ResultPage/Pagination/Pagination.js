import React from 'react'
import PropTypes from 'prop-types'
import PaginationLayout from './PaginationLayout'
import PaginationItem from './PaginationItem'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Pagination = ({ pageCount, onSelectPage, fetchNews }) => {
  let page = 1
  let paginationItems = []
  for (page; page <= pageCount; page++) {
    paginationItems.push(page)
  }

  const firstPage = (
    <PaginationItem
      page={Number(paginationItems[0])}
      onSelectPage={onSelectPage}
      fetchNews={fetchNews}
    >
      <FontAwesomeIcon icon="angle-double-left" />
    </PaginationItem>
  )

  const lastPage = (
    <PaginationItem
      page={Number(paginationItems[paginationItems.length - 1])}
      onSelectPage={onSelectPage}
      fetchNews={fetchNews}
    >
      <FontAwesomeIcon icon="angle-double-right" />
    </PaginationItem>
  )

  const pages = paginationItems.map(page => (
    <PaginationItem
      key={page}
      page={page}
      onSelectPage={onSelectPage}
      fetchNews={fetchNews}
    >
      {page}
    </PaginationItem>
  ))

  return (
    <PaginationLayout>
      {firstPage}
      {pages}
      {lastPage}
    </PaginationLayout>
  )
}

Pagination.propTypes = {
  pageCount: PropTypes.number,
  onSelectPage: PropTypes.func,
  fetchNews: PropTypes.func,
}

export default Pagination
