import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = ({data,type}) => {
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
      type==='home'? shuffledData.filter((element,index)=>index<4).map((elem,index)=>{
             return(
              <>    
    <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
  <div className="card-img">
      <img src={`${elem.img_url}`} alt="" />

  </div>
  <div className="card-body">
    <div className="card-title">{elem.title.slice(0,30)}...</div>
    <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022</div>


  </div>
</div>

<hr />
</>
             )



            })
            :
            shuffledData.filter((element,index)=>element.type===type).map((elem,index)=>{
             return(
              <>    
    <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
  <div className="card-img">
      <img src={`${elem.img_url}`} />

  </div>
  <div className="card-body">
    <div className="card-title">{elem.title.slice(0,35)}...</div>
    <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022</div>


  </div>
</div>

<hr />
</>
             )



            })
            

            }
    
      
    </>
  )
}

export default Post
