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
import { WHITE } from '../../../assets/colors'

const ResultListLayout = styled.div`
  height: 220px;
  width: 100%;
  margin-top: 24px;
  background-color: ${WHITE};
`

const ImgLayout = styled.div`
  display: inline-block;
  width: 220px;
  height: 220px;
`

const InfoLayout = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 220px);
  height: 100%;
  padding: 24px 20px;
`

const DescriptionLayout = styled.div`
  margin-top: 16px;
`

const AuthorCategoryLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`

const CategoryLayout = styled.div`
  margin-left: 16px;
`

const LocationTimeLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`

const StyledAnchor = styled.a`
  text-decoration: none;
`

const ResultList = ({
  source,
  imgSrc,
  author,
  title,
  description,
  url,
  time,
  location,
}) => (
  <ResultListLayout>
    <StyledAnchor href={url}>
      <ImgLayout>
        <Img src={imgSrc} alt={title} />
      </ImgLayout>
    </StyledAnchor>
    <InfoLayout>
      <StyledAnchor href={url}>
        <Title>{title}</Title>
      </StyledAnchor>
      <DescriptionLayout>
        <Description>{description}</Description>
      </DescriptionLayout>
      <AuthorCategoryLayout>
        <Author>{author}</Author>
        <CategoryLayout>
          <Category>{source.name}</Category>
        </CategoryLayout>
      </AuthorCategoryLayout>
      <LocationTimeLayout>
        <Location>{location}</Location>
        <TimeRange>{time}</TimeRange>
      </LocationTimeLayout>
    </InfoLayout>
  </ResultListLayout>
)

ResultList.propTypes = {
  source: PropTypes.object,
  imgSrc: PropTypes.string,
  author: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.string,
  location: PropTypes.string,
}

export default ResultList
