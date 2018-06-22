import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: 'Roboto-Bold', sans-serif;
  font-weight: bold;
`

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>

Title.propTypes = {
  children: PropTypes.node,
}

export default Title
