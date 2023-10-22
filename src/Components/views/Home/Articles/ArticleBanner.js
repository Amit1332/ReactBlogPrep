import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
const ArticleBanner = ({data}) => {
  const Navigate = useNavigate()
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
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
    <div>
    <Slider {...settings}>
    {
   
      shuffledData.filter((element,index)=>index<10).map((elem,index)=>{
             return(
              <>
    <div className="top-head-image articlebanner"  onClick={()=> Navigate(`/${elem.type}/${elem.id}`)}>
    <div className="close">
    
    </div>
    <div className="left">
    <div className="image-1">
         
         <div className="content">
             <h2>{elem.title.slice(0,50)}...</h2>
             <div className='data'>Travel / 4dec 2022</div>

         </div>
         <img src={`${elem.img_url}`} alt="" />
     </div>
   
    </div>
    </div>

    </>
             )



            })
            

            }
            </Slider>
    </div>

  )
}

export default ArticleBanner
