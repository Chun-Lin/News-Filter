import React from 'react'
import PropTypes from 'prop-types'
import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultTitle from '../components/ResultPage/ResultTitle'

const ResultPage = () => {
  return (
    <ResultLayout>
      <ResultTitle resultCount={15} />
    </ResultLayout>
  )
}

ResultPage.propTypes = {}

export default ResultPage
