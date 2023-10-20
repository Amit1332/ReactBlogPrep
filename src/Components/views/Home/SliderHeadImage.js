import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";

const SliderHeadImage = () => {
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
    
  
    return (
      <div>
      <Slider {...settings}>
     
      <div className="top-head-image articlebanner">
      <div className="left">
      <div className="image-1">
           
           <div className="content">
           <h2>Jai Hind || Bande Matram</h2>
           <div className='data'>Bharat / 15 Aug 1947</div>
  
           </div>
           <img src="https://storyfile.s3.amazonaws.com/0rshy65y-army.jpg" alt="" />
       </div>
     
      </div>
      </div>
  

      <div className="top-head-image articlebanner">
      <div className="left">
      <div className="image-1">
           
      <div className="content">
      <h2>|| One Man Army ||</h2>
      <div className='data'>Travel / 4 Jan 2022</div>

  </div>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI83emJuk8bPpQF6zXF6SPm_fUL37kW5TvPQ&usqp=CAU" alt="" />

       </div>
     
      </div>
      </div>


      <div className="top-head-image articlebanner">
      <div className="left">
      <div className="image-1">
           
      <div className="content">
      <h2>|| Jai Jawan ||</h2>
      <div className='data'>Travel / 4 Dec 2022</div>

  </div>

  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCa7eryFIbJ6cd9j3v41uK6w1Glg83iw19A&usqp=CAU" alt="" />

       </div>
     
      </div>
      </div>
    
              </Slider>
      </div>
  
    )
  }

export default SliderHeadImage
