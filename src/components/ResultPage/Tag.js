import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PURPLE } from '../../assets/colors'

const StyledTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin-top: 8px;
  margin-right: 8px;
  height: 35px;
  border: 1px solid ${PURPLE};
  border-radius: 30px;
`

const CancelButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  border: 1px solid ${PURPLE};
  margin-left: 8px;
`

const Cross = styled.div`
  width: 6px;
  height: 6px;

  background: linear-gradient(
      45deg,
      transparent 44%,
      ${PURPLE} 44%,
      ${PURPLE} 56%,
      transparent 56%
    ),
    linear-gradient(
      -45deg,
      transparent 44%,
      ${PURPLE} 44%,
      ${PURPLE} 56%,
      transparent 56%
    );
`

const TagColor = styled.span`
  font-style: Italic;
  color: ${PURPLE};
`

const Tag = ({ children }) => {
  return (
    <StyledTag>
      <TagColor>{children}</TagColor>
      <CancelButton>
        <Cross />
      </CancelButton>
    </StyledTag>
  )
}

Tag.propTypes = {}

export default Tag
