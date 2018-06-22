import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LIGHT_GREY } from '../../assets/colors'

const StyledLayout = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 380px);
  padding-right: 40px;
  overflow: scroll;
`

const ResultLayout = ({ children }) => <StyledLayout>{children}</StyledLayout>

ResultLayout.propTypes = {}

export default ResultLayout
