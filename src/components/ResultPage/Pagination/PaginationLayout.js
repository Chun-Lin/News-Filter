import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 90px;
`

const PaginationLayout = ({ children }) => <Layout>{children}</Layout>

PaginationLayout.propTypes = {
  children: PropTypes.node,
}

export default PaginationLayout
