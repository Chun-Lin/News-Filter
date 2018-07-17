import React, { Component } from 'react'
import connect from 'react-redux/lib/connect/connect'
import { bindActionCreators } from 'redux'

import Location from '../../components/Sidebar/Location'
import Category from '../../components/Sidebar/Category'
import SidebarLayout from '../../components/Sidebar/SidebarLayout'
import ContentLayout from '../../components/Sidebar/ContentLayout'
import { fetchNews, query } from './fetchNewsRedux'

class Sidebar extends Component {
  render() {
    return (
      <SidebarLayout>
        <ContentLayout>
          <Location
            onSelectCountry={value => this.props.query('country', value)}
            fetchNews={() => this.props.fetchNews()}
          />
          <Category
            onSelectCategory={value => this.props.query('category', value)}
            fetchNews={() => this.props.fetchNews()}
          />
        </ContentLayout>
      </SidebarLayout>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      query,
      fetchNews,
    },
    dispatch,
  )

export default connect(
  null,
  mapDispatchToProps,
)(Sidebar)
