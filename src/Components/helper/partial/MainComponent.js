import React, { useContext } from 'react'
import { store } from '../../../ContextApi/Store'
import HeadingName from './HeadingName'
import Post from './Post'
import Ads from './Ads'
import Card from './Card'
import Navbar from './NavSidebar/Navbar'
import Header from './Header/Header'
import Sidebar from './NavSidebar/Sidebar'

const MainComponent = ({name,type}) => {
  const data  = useContext(store)

 

  return (
    <div>
   <div className="custom-hide">
   <Header/>
   </div>
   <div className="custom-seek">
   <Sidebar/>

</div>
    <div className="container">
    <div className="custom-hide">
    <Navbar/>
    </div>
    <HeadingName name={name}/> 
    <div className="article">
    <div className="left">
 
               <Card data ={data} type={type}/>
               
            
            <div className="load-button">
            <button id="load">Load More </button>
            </div>
            
     </div>
     <div className="right">
     <HeadingName name = "Top Post" />
     <div className="post">
  
         
              <Post data ={data}  type={type}/> 
             
     </div>
     <Ads data ={data}  type={type}/>
 
     </div>
    </div>
    </div>
    </div>
  )
}

export default MainComponent
