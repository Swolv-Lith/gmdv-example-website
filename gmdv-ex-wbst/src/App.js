import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Carousel from './Carousel'
import CardGroup from './CardGroup'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Carousel />
        <CardGroup />
        <Footer />
      </div>
    )
  }
}

export default App
