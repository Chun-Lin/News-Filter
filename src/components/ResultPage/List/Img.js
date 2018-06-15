import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImg = styled.img`
  object-fit: cover;
`

const Img = ({ src }) => {
  return <StyledImg src={src} />
}

Img.propTypes = {
  src: PropTypes.string,
}

export default Img
