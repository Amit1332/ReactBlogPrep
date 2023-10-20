import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data,type}) => {
  const Navigate = useNavigate()
  
  return (
    <>
    {
        data.user.filter((element,index)=>element.type===type).map((elem,index)=>{
               return(
                <>
                
                
    <hr style={{margin:'0px'}}></hr>
        <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
    <div className="card-img">
        <img src={`${elem.img_url}`} alt="" />
  
    </div>
    <div className="card-body">
      <div className="card-title">{elem.title?elem.title.slice(0,80):''}... </div>
      <div className="para">{elem.content?elem.content.slice(0,160):''}...</div>
      <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022</div>
  
  
    </div>
  </div>
  </>
  )



 })
 

 }
  
    </>
  )
}

export default Card
