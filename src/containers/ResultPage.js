import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultTitle from '../components/ResultPage/ResultTitle'
import Tag from '../components/ResultPage/Tag'

const TagWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

const ResultPage = () => {
  return (
    <ResultLayout>
      <ResultTitle resultCount={15} />
      <TagWrapper>
        <Tag>Business</Tag>
        <Tag>Entertainment</Tag>
        <Tag>Business</Tag>
      </TagWrapper>
    </ResultLayout>
  )
}

ResultPage.propTypes = {}

export default ResultPage
