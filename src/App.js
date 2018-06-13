import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Location from './components/Sidebar/Location'
import Date from './components/Sidebar/Date'
import Layout from './containers/Layout'
import Category from './components/Sidebar/Category'
import Sidebar from './containers/Sidebar'
import ResultPage from './containers/ResultPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sidebar />
          <ResultPage />
        </Layout>
      </div>
    )
  }
}

export default App
