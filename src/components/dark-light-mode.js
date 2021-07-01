import React, { useState } from 'react'

import '../styles/dark-light-mode.css';
import Clock from './clock';

export default function DarkLightMode() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="container">
        <Clock />

        <div className="grid-wrapper">
          <span className="sun" style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
        </div>
      </div>
    </div>
  )
}
