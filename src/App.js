import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Location from './components/Sidebar/Location'
import Date from './components/Sidebar/Date'
import Layout from './containers/Layout'
<<<<<<< HEAD
=======
import Category from './components/Sidebar/Category'
import Sidebar from './containers/Sidebar'
>>>>>>> 27e4f67... style: finish the sidebar layout
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          {/* <Location />
          <Date />
<<<<<<< HEAD
=======
          <Category /> */}
          <Sidebar />
>>>>>>> 27e4f67... style: finish the sidebar layout
        </Layout>
      </div>
    )
  }
}

export default App
