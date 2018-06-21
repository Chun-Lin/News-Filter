import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  width: 380px;
  height: 100%;
  display: inline-block;
  vertical-align: top;
`

const SidebarLayout = ({ children }) => {
  return <Layout>{children}</Layout>
}

SidebarLayout.propTypes = {
  children: PropTypes.node,
}

export default SidebarLayout
