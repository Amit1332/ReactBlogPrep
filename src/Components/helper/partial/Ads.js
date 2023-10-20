import React, { useContext } from 'react'

const Ads = ({data,type}) => {
console.log( data.adsvert.filter((element)=> element.type===type));
  return (
    <>
      <div className="ads">
      {
        data.adsvert.filter((element)=> element.type===type).map((elem)=>{
          return (
            <div>
               <img src={`${elem.img}`} alt="" />

            </div>
          )
        })
         
      }
      
      </div>

    </>
  )
}

export default Ads
