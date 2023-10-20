import React, { useContext } from 'react'
import HeadingName from '../../../helper/partial/HeadingName'
import Ads from '../../../helper/partial/Ads'
import Card from './Card'
import { store } from '../../../../ContextApi/Store'
import Post from '../../../helper/partial/Post'
import ArticleBanner from './ArticleBanner'

const Article = (props) => {
  const data  = useContext(store)

  return (
    <>
    <HeadingName name="Latest Article"/> 
   <div className="article">
   <div className="left">
  
              <Card data ={data}/>
              
            
           <div className="load-button">
           <button id="load">Load More </button>
           </div>

       
              
              <ArticleBanner data ={data} />
              
            


           
    </div>
    <div className="right">
    <Ads data ={data} type="home"/>
    <div>
    <HeadingName name = "Top Post" />
    <div className="post">
 
     
             <Post data ={data} type="home"/> 
             
    </div>
    </div>
    </div>
   </div>
    
    </>
  )
}

export default Article