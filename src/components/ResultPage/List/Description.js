import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFont = styled.div`
  font-size: 16px;
`

const Description = ({ children }) => {
  return <StyledFont>{children}</StyledFont>
}

Description.propTypes = {
  children: PropTypes.node,
}

export default Description
