import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ContentLayout = ({ children }) => <Layout>{children}</Layout>

ContentLayout.propTypes = {
  children: PropTypes.node,
}

export default ContentLayout
