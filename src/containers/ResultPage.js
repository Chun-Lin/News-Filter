import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultCount from '../components/ResultPage/ResultCount'
import Tag from '../components/ResultPage/Tag'
import ResultList from '../components/ResultPage/List/ResultList'
import Pagination from '../components/ResultPage/Pagination/Pagination'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const TagLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const ResultPage = () => {
  return (
    <ResultLayout>
      <ResultCount resultCount={15} />
      <TagLayout>
        <Tag>Business</Tag>
        <Tag>Entertainment</Tag>
        <Tag>Sports</Tag>
      </TagLayout>
      <ResultList imgSrc="https://picsum.photos/220/220?random=1" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=2" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=3" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=4" />
      <ResultList imgSrc="https://picsum.photos/220/220?random=5" />
      <Pagination pageCount={10} />
    </ResultLayout>
  )
}

ResultPage.propTypes = {}

export default ResultPage
