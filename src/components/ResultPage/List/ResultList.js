import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Location from './Location'
import TimeRange from './TimeRange'
import Category from './Category'
import Author from './Author'
import Description from './Description'
import Title from './Title'
import Img from './Img'
import { WHITE } from '../../../constants/colors'

const ResultList = ({
  source,
  imgSrc,
  author,
  title,
  description,
  url,
  time,
  location,
  className,
}) => (
  <div className={className}>
    <a className="result__anchor" href={url}>
      <div className="result__img">
        <Img src={imgSrc} alt={title} />
      </div>
    </a>
    <div className="result__info">
      <a className="result__anchor" href={url}>
        <Title>{title}</Title>
      </a>
      <div className="result__description">
        <Description>{description}</Description>
      </div>
      <div className="result__author-category">
        <Author>{author}</Author>
        <div className="result__category">
          <Category>{source.name}</Category>
        </div>
      </div>
      <div className="result__location-time">
        <Location>{location}</Location>
        <TimeRange>{time}</TimeRange>
      </div>
    </div>
  </div>
)

const StyledResultList = styled(ResultList)`
  height: 220px;
  width: 100%;
  margin-top: 24px;
  background-color: ${WHITE};

  .result__anchor {
    text-decoration: none;
    .result__img {
      display: inline-block;
      width: 220px;
      height: 220px;
    }
  }

  .result__info {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 220px);
    height: 100%;
    padding: 24px 20px;

    .result__description {
      margin-top: 16px;
    }

    .result__author-category {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 16px;

      .result__category {
        margin-left: 16px;
      }
    }

    .result__location-time {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 16px;
    }
  }
`

StyledResultList.propTypes = {
  source: PropTypes.object,
  imgSrc: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
  className: PropTypes.string,
}

export default StyledResultList
