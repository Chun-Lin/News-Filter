import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LIGHT_GREY } from '../assets/colors'
import Location from '../components/Sidebar/Location'
import Date from '../components/Sidebar/Date'
import Category from '../components/Sidebar/Category'

const LayoutSidebar = styled.div`
  width: 380px;
  height: 100%;
  background-color: ${LIGHT_GREY};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export default class Sidebar extends Component {
  render() {
    return (
      <LayoutSidebar>
        <Location />
        <Date />
        <Category />
      </LayoutSidebar>
    )
  }
}
