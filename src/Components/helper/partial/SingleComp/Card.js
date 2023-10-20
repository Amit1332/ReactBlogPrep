import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import profile from '../../../../assets/icons/profile.jpeg'
import HeadingName from '../HeadingName'

const Card = ({data,type}) => {
  const Navigate = useNavigate()
  const settings = {
    dots: false,
    arrows:true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
   
  };
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
   
    <div className="latest-card related-cards">
    <div style={{fontWeight:'600'}}>More From the Siren</div>
    <hr style={{margin:"20px 0px"}}/>
    <Slider {...settings}>
    
    {
        shuffledData.filter((element) => element.type === type).map((elem)=>{
   return(
    <>
    
  <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
  <span >Related reads</span>
  <div className="card-img" style={{marginTop:'10px'}}>
      <img src={`${elem.img_url}`} alt="" />

  </div>
  <div className="card-body related">
    <div className="card-title">{elem.title.slice(0,40)}...</div>
    <div className="user-data">
                <div className="left">
                <div className="user-img">
                <img src={profile} alt="" />
                </div>
                <div className="user-name">
                <h4>{elem.user.name}</h4>
                <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022 10 mins read</div>
                </div>
                </div>
               
                </div>

  </div>
</div>



  
</>
)



})


}
  


</Slider>
   
</div>

    </>
  )
}

export default Card