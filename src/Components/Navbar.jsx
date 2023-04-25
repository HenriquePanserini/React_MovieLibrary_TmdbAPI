import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './ComponentsGrid.css'

function Navbar() {

  const [ search, setSearch ] =  useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    navigate(`/search?q=${search}`);
    setSearch("");
  }

  return (
    <div className='container-navbar'>
        <nav className='navbar'>
            <h2>
                <a href='/'>
                    <BiCameraMovie className='icon' /> MovieLibrary
                </a>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                       name='search' 
                       placeholder='search...' 
                       onChange={(e) => setSearch(e.target.value)}
                       value={search}
                />
                <button type='submit'>
                    <BiSearchAlt2 className='icon' />
                </button>
            </form>
        </nav>
    </div>
  )
}

export default Navbar;