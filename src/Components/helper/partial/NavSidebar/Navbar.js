import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<div className="navbar">
        <div className="box1">
        <NavLink to='/' activeClassName="active-link">Home</NavLink>
        </div>

        <div className="box1">
      <NavLink to='/bollywood'>Bollywood</NavLink>
        </div> 
        <div className="box1">
      <NavLink to='/hollywood'>Hollywood</NavLink>
        </div>

        <div className="box1">
      <NavLink to='/technology'>Technology</NavLink>
        </div>

        <div className="box1">
      <NavLink to='/fitness'>Fitness</NavLink>
        </div>

        <div className="box1">
      <NavLink to='/food'>Food</NavLink>
        </div>
        
    </div>

    <hr/>

    </div>
  )
}

export default Navbar