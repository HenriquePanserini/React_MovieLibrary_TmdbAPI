import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

function Navbar() {
  return (
    <div className='container1'>
        <nav className='nav-bar'>
            <h2>
                <a href='/'>
                    <BiCameraMovie className='icon' /> MovieLibrary
                </a>
            </h2>
            <input type='text' name='search' placeholder='search...'/>
            <button type='submit'>
                <BiSearchAlt2 className='icon' />
            </button>
        </nav>
    </div>
  )
}

export default Navbar;