import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 380px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
`

const SidebarLayout = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>
}

SidebarLayout.propTypes = {}

export default SidebarLayout
