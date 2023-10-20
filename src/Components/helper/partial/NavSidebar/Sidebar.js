import React from 'react'
import { useState } from 'react'

const Sidebar = () => {
    const [icons,setIcons]=useState(false)

    const handleOpen = ()=>{
        setIcons(false)
    }

    const handleClose = ()=>{
        setIcons(true)
    }
  return (
    <div>
    <div className="single-nav">
    <div className="header">
                  <div className="head1">The</div>
                  <div className="head1">Siren</div>

          </div>
          <div className='hamburg' >
          {
            icons ? <i class="ri-close-line" onClick={handleOpen} ></i>
            :
            <i class="ri-menu-line" onClick={handleClose}></i>
          }
         
    </div>
    </div>

   {
    icons?
    <div className="nav-links">
    <div className="nav-items">
     Home
    </div>
    <div className="nav-items">
     Bollywood
    </div>
    <div className="nav-items">
    Hollywood
    </div>  <div className="nav-items">
    Technology
    </div>  <div className="nav-items">
   Fitness
    </div>  <div className="nav-items">
   Food
    </div>
    
    </div>
    :
    ''

   }

    </div>
  )
}

export default Sidebar
