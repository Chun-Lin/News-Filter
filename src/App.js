import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'
import Header from './features/fetchNews/HeaderContainer'
import Sidebar from './features/fetchNews/SidebarContainer'
import ResultPage from './features/fetchNews/ResultPageContainer'
import 'nodep-date-input-polyfill'
import { LIGHT_GREY } from './shared/constants'

const StyledMainLayout = styled.main`
  margin-top: 92px;
  height: 100%;
  background-color: ${LIGHT_GREY};
`
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <StyledMainLayout>
          <Sidebar />
          <ResultPage />
        </StyledMainLayout>
      </div>
    )
  }
}

export default App
