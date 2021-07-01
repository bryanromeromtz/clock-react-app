import React, { Component } from 'react'

import '../styles/clock.css';
import '../styles/dark-light-mode.css'

import DarkLightMode from './dark-light-mode';

export default class App extends Component {


  render() {

    return (
      <div className="App">
        <DarkLightMode />
      </div>
    )
  }
}