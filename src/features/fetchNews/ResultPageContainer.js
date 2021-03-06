import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import connect from 'react-redux/lib/connect/connect'
import dateFns from 'date-fns'

import ResultLayout from '../../components/ResultPage/ResultLayout'
import ResultCount from '../../components/ResultPage/ResultCount'
import ResultList from '../../components/ResultPage/List/ResultList'
import Pagination from '../../components/ResultPage/Pagination/Pagination'
import Loading from '../../components/ResultPage/Lodaing/Loading'
import LoadingLayout from '../../components/ResultPage/Lodaing/LoadingLayout'
import { fetchNews, query } from './fetchNewsRedux'

class ResultPage extends Component {
  render() {
    const { totalResults, articles, location, loading } = this.props

    const spinner = (
      <LoadingLayout>
        <Loading />
      </LoadingLayout>
    )

    let resultList = <Fragment />
    resultList =
      articles.length !== 0 &&
      articles.map(article => {
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

    const pageCount = Number((totalResults / 20).toFixed())

    return (
      <ResultLayout>
        <ResultCount resultCount={totalResults} />
        {loading === true ? spinner : resultList}
        {articles.length !== 0 && (
          <Pagination
            pageCount={pageCount}
            onSelectPage={page => this.props.query('page', page)}
            fetchNews={() => this.props.fetchNews()}
          />
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
  query: PropTypes.func,
  fetchNews: PropTypes.func,
}

const mapStateToProps = state => ({
  totalResults: state.fetch.totalResults,
  articles: state.fetch.articles,
  location: state.fetch.queryString.country.label,
  loading: state.shared.loading,
})

const mapDispatchToProps = {
  query,
  fetchNews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultPage)
