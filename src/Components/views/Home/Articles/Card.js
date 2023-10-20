import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data}) => {
  const Navigate = useNavigate()
  function shuffleArray(array) {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const shuffledData = shuffleArray(data.user);
  return (
    <>
    {
      shuffledData.filter((element,index)=>index<4).map((elem,index)=>{
               return(
                <>
                
                
    <hr style={{margin:'0px'}}></hr>
        <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
    <div className="card-img">
        <img src={`${elem.img_url}`} alt="" />
  
    </div>
    <div className="card-body">
      <div className="card-title">{elem.title.slice(0,80)}...</div>
      <div className="para">{elem.content.slice(0,160)}...</div>
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
