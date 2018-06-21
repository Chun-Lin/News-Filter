import React, { Component } from 'react'
import connect from 'react-redux/lib/connect/connect'

import Location from '../components/Sidebar/Location'
import Category from '../components/Sidebar/Category'

import { queryCountry, queryCategory, fetchNews } from '../store/actions'
import SidebarLayout from '../components/Sidebar/SidebarLayout'
import ContentLayout from '../components/Sidebar/ContentLayout'

class Sidebar extends Component {
  render() {
    return (
      <SidebarLayout>
        <ContentLayout>
          <Location
            onSelectCountry={value => this.props.queryCountry(value)}
            fetchNews={() => this.props.fetchNews()}
          />
          <Category
            onSelectCategory={value => this.props.queryCategory(value)}
            fetchNews={() => this.props.fetchNews()}
          />
        </ContentLayout>
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
