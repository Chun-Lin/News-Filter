import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultTitle from '../components/ResultPage/ResultTitle'
import Tag from '../components/ResultPage/Tag'
import ResultList from '../components/ResultPage/ResultList'
import PaginationLayout from '../components/Pagination/PaginationLayout'
import PaginationItem from '../components/Pagination/PaginationItem'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

;('https://picsum.photos/220/220?random=1')

const ResultPage = () => {
  return (
    <ResultLayout>
      <ResultTitle resultCount={15} />
      <TagWrapper>
        <Tag>Business</Tag>
        <Tag>Entertainment</Tag>
        <Tag>Sports</Tag>
      </TagWrapper>
      <ResultList imgSrc="https://picsum.photos/220/220?random=1" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=2" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=3" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=4" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=5" />
      <PaginationLayout>
        <PaginationItem>
          <FontAwesomeIcon icon="angle-double-left" />
        </PaginationItem>
        <PaginationItem>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <PaginationItem>
          <FontAwesomeIcon icon="angle-double-right" />
        </PaginationItem>
      </PaginationLayout>
    </ResultLayout>
  )
}

ResultPage.propTypes = {}

export default ResultPage
