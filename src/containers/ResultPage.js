import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import shortid from 'shortid'
import connect from 'react-redux/lib/connect/connect'
import dateFns from 'date-fns'

import ResultLayout from '../components/ResultPage/ResultLayout'
import ResultCount from '../components/ResultPage/ResultCount'
import ResultList from '../components/ResultPage/List/ResultList'
import Pagination from '../components/ResultPage/Pagination/Pagination'
import Loading from '../components/ResultPage/Lodaing/Loading'
import LoadingLayout from '../components/ResultPage/Lodaing/LoadingLayout'
import { queryPage, fetchNews } from '../store/actions'

class ResultPage extends Component {
  render() {
    const { totalResults, articles, location, loading } = this.props

    let spinner = (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    )

    let resultList = <Fragment />
    if (articles.length !== 0) {
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

    const pageCount = Number((totalResults / 20).toFixed())

    return (
      <ResultLayout>
        <ResultCount resultCount={totalResults} />
        {loading === true ? spinner : resultList}
        {articles.length !== 0 ? (
          <Pagination
            pageCount={pageCount}
            onSelectPage={page => this.props.queryPage(page)}
            fetchNews={() => this.props.fetchNews()}
          />
        ) : (
          <Fragment />
        )}
      </ResultLayout>
    )
  }
}

ResultPage.propTypes = {
  totalResults: PropTypes.number,
  articles: PropTypes.array,
  location: PropTypes.string,
  loading: PropTypes.bool,
  queryPage: PropTypes.func,
  fetchNews: PropTypes.func,
}

const mapStateToProps = state => ({
  totalResults: state.totalResults,
  articles: state.articles,
  location: state.queryString.country.label,
  loading: state.loading,
})

const mapDispatchToProps = {
  queryPage,
  fetchNews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPage)
