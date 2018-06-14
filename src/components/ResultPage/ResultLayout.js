import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LIGHT_GREY } from '../../assets/colors'

const StyledLayout = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100vw - 380px);
  ${'' /* height: calc(100vh - 182px); */}
  padding-right: 40px;
  background-color: ${LIGHT_GREY};
  overflow: scroll;
`

const ResultLayout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

ResultLayout.propTypes = {}

export default ResultLayout
