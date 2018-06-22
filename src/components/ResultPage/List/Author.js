import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BLACK } from '../../../assets/colors'

const StyledFont = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${BLACK};
`

const Author = ({ children }) => <StyledFont>{children}</StyledFont>

Author.propTypes = {
  children: PropTypes.node,
}

export default Author
