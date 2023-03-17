import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './ComponentsGrid.css'

function Navbar() {
  return (
    <div className='container-navbar'>
        <nav className='navbar'>
            <h2>
                <a href='/'>
                    <BiCameraMovie className='icon' /> MovieLibrary
                </a>
            </h2>
            <form>
                <input type='text' name='search' placeholder='search...'/>
                <button type='submit'>
                    <BiSearchAlt2 className='icon' />
                </button>
            </form>
        </nav>
    </div>
  )
}

export default Navbar;