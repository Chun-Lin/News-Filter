import React from 'react'
import PropTypes from 'prop-types'
import PaginationLayout from './PaginationLayout'
import PaginationItem from './PaginationItem'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const Pagination = ({ pageCount }) => {
  let page = 1
  let paginationItems = []
  for (page; page <= pageCount; page++) {
    paginationItems.push(page)
  }

  return (
    <PaginationLayout>
      <PaginationItem>
        <FontAwesomeIcon icon="angle-double-left" />
      </PaginationItem>
      {paginationItems.map(page => {
        return <PaginationItem key={page}>{page}</PaginationItem>
      })}
      <PaginationItem>
        <FontAwesomeIcon icon="angle-double-right" />
      </PaginationItem>
    </PaginationLayout>
  )
}

Pagination.propTypes = {}

export default Pagination
