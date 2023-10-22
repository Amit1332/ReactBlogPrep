import React from 'react'
import { useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Sidebar = () => {
const location = useLocation();

  const Navigate = useNavigate()
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
    <div className={`nav-items ${location.pathname === '/' ? 'active-tab-side' : ''}`} onClick={()=>{
      Navigate('/');
      setIcons(false); 

    }}>
     Home
     
    </div>
    
    <div className={`nav-items ${location.pathname === '/bollywood' ? 'active-tab-side' : ''}`} onClick={()=>{
      Navigate('/bollywood');
      setIcons(false); 
    } }>
     Bollywood
    </div>
    <div className={`nav-items ${location.pathname === '/hollywood' ? 'active-tab-side' : ''}`} onClick={()=>{
      setIcons(false); 
      Navigate('/hollywood');}}>
    Hollywood
    </div>  
    <div className={`nav-items ${location.pathname === '/technology' ? 'active-tab-side' : ''}`} onClick={()=>{
      Navigate('/technology');
      setIcons(false); 

    }}>
    Technology
    </div> 
     <div className={`nav-items ${location.pathname === '/fitness' ? 'active-tab-side' : ''}`} onClick={()=>{
      Navigate('/fitness');
      setIcons(false); 


    }}>
   Fitness
    </div>
      <div className={`nav-items ${location.pathname === '/food' ? 'active-tab-side' : ''}`} onClick={()=>{
      Navigate('/food');
      setIcons(false); 

    }}>
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
