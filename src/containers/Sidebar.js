import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import connect from 'react-redux/lib/connect/connect'

import { LIGHT_GREY } from '../assets/colors'
import Location from '../components/Sidebar/Location'
import Date from '../components/Sidebar/Date'
import Category from '../components/Sidebar/Category'
import SidebarLayout from '../components/Sidebar/SidebarLayout'
import FilterButton from '../components/Sidebar/FilterButton'

import { queryCountry, queryCategory, fetchNews } from '../store/actions'

const SidebarWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 92px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class Sidebar extends Component {
  render() {
    return (
      <SidebarLayout>
        <SidebarWrapper>
          <Location
            onSelectCountry={value => this.props.queryCountry(value)}
            fetchNews={() => this.props.fetchNews()}
          />
          <Category
            onSelectCategory={value => this.props.queryCategory(value)}
            fetchNews={() => this.props.fetchNews()}
          />
        </SidebarWrapper>
      </SidebarLayout>
    )
  }
}

const mapDispatchToProps = {
  queryCountry,
  queryCategory,
  fetchNews,
}

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar)
