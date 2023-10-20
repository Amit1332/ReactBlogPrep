import React, { useContext } from 'react'
import TopHeadImage from './TopHeadImage'
import Latest from './Latest/Latest'
import Article from './Articles/Article'
import { store } from '../../../ContextApi/Store'
import Stories from './Stories.js/Stories'
import Navbar from '../../helper/partial/NavSidebar/Navbar'
import Header from '../../helper/partial/Header/Header'
import Sidebar from '../../helper/partial/NavSidebar/Sidebar'
import SliderHeadImage from './SliderHeadImage'

const Home = () => {
  
  return (
    <>
    <div className="custom-hide">
    <Header/>
    </div>
    <div className="custom-seek">
     <Sidebar/>
  
       </div>
     <div className="container">
     <div className="custom-hide">
     <Navbar/>
     <TopHeadImage/>

     </div>
     <div className="custom-seek">
   <SliderHeadImage/>
  
       </div>


      <Latest/>
      <Article/>
      <Stories/>
</div>
    </>
  )
}

export default Home