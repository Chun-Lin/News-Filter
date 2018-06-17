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
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const TagLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`

class ResultPage extends Component {
  render() {
    return (
      <ResultLayout>
        <ResultCount resultCount={this.props.totalResults} />
        <TagLayout>
          <Tag>Business</Tag>
          <Tag>Entertainment</Tag>
          <Tag>Sports</Tag>
        </TagLayout>
        {this.props.articles.map(article => {
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
              location={this.props.location}
            />
          )
        })}
        {this.props.articles.length !== 0 ? <Pagination pageCount={10} /> : null}
        
      </ResultLayout>
    )
  }
}

ResultPage.propTypes = {}

const mapStateToProps = state => ({
  totalResults: state.totalResults,
  articles: state.articles,
  location: state.queryString.country.label
})

export default connect(mapStateToProps)(ResultPage)
