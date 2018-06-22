import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLayout = styled.div`
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 380px);
  padding-right: 40px;
  overflow: scroll;
`

const ResultLayout = ({ children }) => <StyledLayout>{children}</StyledLayout>

ResultLayout.propTypes = {
  children: PropTypes.node,
}

export default ResultLayout
