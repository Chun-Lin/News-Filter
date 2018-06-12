import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Location from './components/Sidebar/Location'
import Date from './components/Sidebar/Date'
import Layout from './containers/Layout'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Location />
          <Date />
        </Layout>
      </div>
    )
  }
}

export default App
