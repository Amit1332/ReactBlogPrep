import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../helper/partial/Footer/Footer'
import Home from './Home/Home'

import Store from '../../ContextApi/Store'
import SingleComponent from '../helper/partial/SingleComp/SingleComponent'
import MainComponent from '../helper/partial/MainComponent'

const BaseRoute = () => {
  return (
   <>

   <BrowserRouter>
<Store>
  
      <Routes>
          
      <Route path='/' element={<Home />}/>
      <Route path='/bollywood' element={<MainComponent name="Bollywood" type="bollywood"/>}/>
      <Route path='/bollywood/:id' element={<SingleComponent type="bollywood"/>}/>


      <Route path='/hollywood' element={<MainComponent name="Hollywood" type="hollywood"/>}/>
      <Route path='/hollywood/:id' element={<SingleComponent type="hollywood"/>}/>

      <Route path='/technology' element={<MainComponent name="Technology" type="technology"/>}/>
      <Route path='/technology/:id' element={<SingleComponent type="technology"/>}/>


      <Route path='/fitness' element={<MainComponent name="Fitness" type="fitness"/>}/>
      <Route path='/fitness/:id' element={<SingleComponent type="fitness"/>}/>

      <Route path='/food' element={<MainComponent name="Food" type="food"/>}/>
      <Route path='/food/:id' element={<SingleComponent type="food"/>}/>







      </Routes>
     
      <Footer/>
      </Store>
     </BrowserRouter>
   </>
  )
}

export default BaseRoute