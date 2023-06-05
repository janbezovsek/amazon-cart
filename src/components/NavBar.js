import React from 'react'
import { useState } from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import SearchBar from './searchBar'


const NavBar = ({ query, setQuery,list, setList, navigateToShop }) => {
  
  return (
    <>
      <nav>
          <NavLink to="/">Home</NavLink> 
          <NavLink to="/shop" >Shop</NavLink>
          {/*<input type="text" id="myInput" placeholder="Search for items.." onChange={e => setQuery(e.target.value)} />*/}
          <SearchBar query={query} setQuery={setQuery} list={list} setList={setList} navigateToShop={navigateToShop}/>
      </nav>
        
    </>
  )
}

export default NavBar