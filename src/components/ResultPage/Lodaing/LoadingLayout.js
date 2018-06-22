import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

const LoadingLayout = ({ children }) => <Layout>{children}</Layout>

LoadingLayout.propTypes = {
  children: PropTypes.node,
}

export default LoadingLayout
