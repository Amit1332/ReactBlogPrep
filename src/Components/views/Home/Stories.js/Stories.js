import React, { useContext } from 'react'
import HeadingName from '../../../helper/partial/HeadingName'
import Card from './Card'
import { store } from '../../../../ContextApi/Store'

const Stories = () => {
  const data  = useContext(store)

  return (
   <>
   
   <HeadingName name="Latest Stories"/>
   <hr style={{marginTop:"30px"}} />

   <div className='latest-card stories'>

     <Card data ={data}/>
     
    

     
   </div>
 
   </>
  )
}

export default Stories
