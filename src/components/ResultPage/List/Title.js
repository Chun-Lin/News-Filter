import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../../constants/colors'

const StyledFont = styled.div`
  font-size: 24px;
  color: ${PURPLE};
`

const Title = ({ children }) => <StyledFont>{children}</StyledFont>

Title.propTypes = {
  children: PropTypes.node,
}

export default Title
