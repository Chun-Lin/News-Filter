import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { LIGHT_GREY } from '../assets/colors'
import Location from '../components/Sidebar/Location'
import Date from '../components/Sidebar/Date'
import Category from '../components/Sidebar/Category'
import SidebarLayout from '../components/Sidebar/SidebarLayout';

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`



export default class Sidebar extends Component {
  render() {
    return (
      <SidebarLayout>
        <SidebarWrapper>
          <Location />
          <Date />
          <Category />
        </SidebarWrapper>
      </SidebarLayout>
    )
  }
}
