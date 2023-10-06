import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../helper/partial/Header/Header'
import Navbar from '../helper/partial/NavSidebar/Navbar'
import Footer from '../helper/partial/Footer/Footer'
import Home from './Home/Home'
import Bollywood from './Bollywood/Bollywood'
import Hollywood from './Hollywood/Hollywood'
import Technology from './Technology/Technology'
import Fitness from './Fitness/Fitness'
import Food from './Food/Food'

const BaseRoute = () => {
  return (
   <>
   <BrowserRouter>
    <Header/>
    <div className="container">
    <Navbar/>
      <Routes>
          
      <Route path='/' element={<Home/>}/>
      <Route path='/bollywood' element={<Bollywood/>}/>
      <Route path='/hollywood' element={<Hollywood/>}/>
      <Route path='/technology' element={<Technology/>}/>
      <Route path='/fitness' element={<Fitness/>}/>
      <Route path='/food' element={<Food/>}/>






      </Routes>
      </div>
      <Footer/>
     </BrowserRouter>
   </>
  )
}

export default BaseRoute