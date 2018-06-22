import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFont = styled.div`
  white-space: nowrap;
  width: calc(100% - 220px);
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Description = ({ children }) => <StyledFont>{children}</StyledFont>

Description.propTypes = {
  children: PropTypes.node,
}

export default Description
