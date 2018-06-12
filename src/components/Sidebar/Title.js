import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.div`
  font-size: 20px;
  margin-bottom: 15px;
  font-family: 'Roboto-Bold', sans-serif;
`

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>
}

Title.propTypes = {}

export default Title
