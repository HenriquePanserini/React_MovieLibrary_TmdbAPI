import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Home from './Pages/Home'

import './App.css';

function App() {
  
  return (
    <div className="container-app">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default App;
