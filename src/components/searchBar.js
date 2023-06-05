import React, {useState} from 'react'
import data from '../Data';
import './searchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SearchBar = ({ query, setQuery, list, setList, navigateToShop }) => {

    //handler function for searching items in searchbar

    const handleChange = (e) => {
        e.preventDefault();
        const results = data.filter(post => {
            if (e.target.value === "") return null
            return post.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setQuery(e.target.value)
        setList(results)
      };
      
      

      return (
        
        <>
        
        <input type="text" id="myInput"  placeholder="Search for items.." onChange={handleChange} value={query}   />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="searchIcon"  />
      
        <ul>
          {(query === '' ? "" : list.map(post => {
            return <li style={{cursor:'pointer'}} onClick={navigateToShop} key={post.title}>{post.title}</li>//when we chose an item in dropdown list it redirects us to that page where item is(in our case shop page)
          }))}
        </ul>
        
        </>
        )

}



export default SearchBar