import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import connect from 'react-redux/lib/connect/connect'
import dateFns from 'date-fns'

import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultCount from '../components/ResultPage/ResultCount'
import Tag from '../components/ResultPage/Tag'
import ResultList from '../components/ResultPage/List/ResultList'
import Pagination from '../components/ResultPage/Pagination/Pagination'
import Loading from '../components/ResultPage/Lodaing/Loading.js'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const LoadingLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

class ResultPage extends Component {
  render() {
    const { totalResults, articles, location, loading } = this.props

    let resultList = (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    )

    if (loading === false) {
      resultList = articles.map(article => {
        const {
          source,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
        } = article

        const time = dateFns.format(publishedAt, 'YYYY-MM-DD HH:mm')
        return (
          <ResultList
            key={shortid.generate()}
            source={source}
            imgSrc={urlToImage}
            author={author ? author : 'Anonymous'}
            title={title}
            description={description}
            url={url}
            time={time}
            location={location}
          />
        )
      })
    }

    return (
      <ResultLayout>
        <ResultCount resultCount={totalResults} />
        {resultList}
        {articles.length !== 0 ? <Pagination pageCount={10} /> : null}
      </ResultLayout>
    )
  }
}

ResultPage.propTypes = {}

const mapStateToProps = state => ({
  totalResults: state.totalResults,
  articles: state.articles,
  location: state.queryString.country.label,
  loading: state.loading,
})

export default connect(mapStateToProps)(ResultPage)
