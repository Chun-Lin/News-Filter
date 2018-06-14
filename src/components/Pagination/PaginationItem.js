import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { WHITE, PURPLE } from '../../assets/colors';

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 42px;
  margin-left: 1px;
  background-color: ${WHITE};
  color: ${PURPLE};
`


const PaginationItem = ({children}) => {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

PaginationItem.propTypes = {
  children: PropTypes.node
}

export default PaginationItem
