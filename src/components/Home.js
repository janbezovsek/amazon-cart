import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='home'>
        <h1>HOME</h1>
        <Link to="/">Home</Link> 
    </div>
  )
}

export default Home