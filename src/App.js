import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Location from './components/Sidebar/Location'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Location />
      </div>
    )
  }
}

export default App
