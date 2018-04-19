import React, { Component } from 'react'

import Header from './Header'
import Hero from './Hero'
import Portfolio from './Portfolio'
import ContactUs from './ContactUs'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Hero />

        <Portfolio />

        <ContactUs />
      </div>
    )
  }
}

export default App
