

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";

const Card = ({data}) => {
  const Navigate = useNavigate()
  const settings = {
    dots: false,
    arrows:false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
   
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
   
    <Slider {...settings}>
    
    {
      shuffledData.map((elem)=>{
   return(
    <>
    
  <div className="card" onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
 
  <div className="card-body">
    <div className="card-title">{elem.title.slice(0,40)}...</div>
    <div className="para">{elem.content.slice(0,100)}...</div>
    <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022</div>


  </div>
</div>



  
</>
)



})


}
  


</Slider>
   

    </>
  )
}

export default Card