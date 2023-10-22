import React, { useContext, useState } from 'react'

const Ads = ({data,type}) => {
const [view ,setView] = useState(true)
const handleclose = ()=>{
setView(false)
}
  return (
    <>
      <div className="ads">
      {
        view ? <div className="close-icon">
      <i class="ri-close-line" onClick={handleclose}></i>
      </div>
      :''
      }
      {
        view ? 
        data.adsvert.filter((element)=> element.type===type).map((elem)=>{
          return (
            <div>
               <img src={`${elem.img}`} alt="" />

            </div>
          )
        })

        :''
         
      }
      
      </div>

    </>
  )
}

export default Ads
