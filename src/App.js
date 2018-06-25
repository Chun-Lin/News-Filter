import React, { Component } from 'react'
import './App.css'
import Header from './containers/Header'
import Layout from './containers/Layout'
import Sidebar from './containers/Sidebar'
import ResultPage from './containers/ResultPage'
import 'nodep-date-input-polyfill'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Layout>
          <Sidebar />
          <ResultPage />
        </Layout>
      </div>
    )
  }
}

export default App
