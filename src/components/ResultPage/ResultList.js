import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
  WHITE,
  PURPLE,
  BLACK,
  MEDIUM_GREY,
  DEEP_GREY,
} from '../../assets/colors'

const StyledResultList = styled.div`
  height: 220px;
  width: 100%;
  margin-top: 24px;
  background-color: ${WHITE};
`

const ImgWrapper = styled.div`
  display: inline-block;
  width: 220px;
  height: 220px;
`

const Img = styled.img`
  object-fit: cover;
`

const InfoWrapper = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 220px);
  height: 100%;
  padding: 24px 20px;
  overflow: scroll;
`

const Title = styled.div`
  font-size: 24px;
  color: ${PURPLE};
`

const Description = styled.div`
  margin-top: 16px;
  font-size: 16px;
`

const AuthorCategoryWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`

const Author = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
`

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 131px;
  height: 24px;
  border-radius: 12px;
  background-color: ${MEDIUM_GREY};
  ${'' /* margin-top: 16px; */} margin-left: 20px;
`

const Category = styled.div`
  font-size: 16px;
  font-style: italic;
  color: ${WHITE};
`

const LocationTimeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`

const GreyInfo = styled.div`
  font-size: 16px;
  color: ${DEEP_GREY};
  margin-left: 7px;
  margin-right: 20px;
`

const ResultList = ({imgSrc}) => {
  return (
    <StyledResultList>
      <ImgWrapper>
        <Img src={imgSrc} />
      </ImgWrapper>
      <InfoWrapper>
        <Title>Kogi Cosby sweater.</Title>
        <Description>
         Alias rem et ut et aut aut sunt. Ipsa ut praesentium rerum neque eveniet soluta dolorem. Voluptatem aut accusantium officia inventore.
        </Description>
        <AuthorCategoryWrapper>
          <Author>Maynard Altenwerth IV</Author>
          <CategoryWrapper>
            <Category>Entertainment</Category>
          </CategoryWrapper>
        </AuthorCategoryWrapper>
        <LocationTimeWrapper>
          <FontAwesomeIcon icon="map-marker-alt" />
          <GreyInfo>Taipei</GreyInfo>
          <FontAwesomeIcon icon="calendar-alt" />
          <GreyInfo>2018/5/24 - 2018/5/31</GreyInfo>
        </LocationTimeWrapper>
      </InfoWrapper>
    </StyledResultList>
  )
}

ResultList.propTypes = {}

export default ResultList
