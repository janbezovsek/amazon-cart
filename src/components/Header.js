import React from 'react'
import './Header.css'

function Header({title, home}) {
  return (
    <div>
      <div className="App">
      <div className="App-header">
        <h1>{title}</h1> 
      </div>
      <div className="home">
        <h1>{home}</h1>
      </div>
      </div>
    </div>
  )
}

export default Header