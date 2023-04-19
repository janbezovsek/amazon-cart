import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/shop" >Shop</NavLink>
    </nav>
  )
}

export default NavBar