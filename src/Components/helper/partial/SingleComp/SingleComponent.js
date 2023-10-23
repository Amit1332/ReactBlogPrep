import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card';
import { store } from '../../../../ContextApi/Store';
import profile from '../../../../assets/icons/profile.jpeg'
import inst from '../../../../assets/icons/instagram_2111463.png'
import yt from '../../../../assets/icons/youtube_174883.png'
import twt from '../../../../assets/icons/twitter_3256013.png'
import fb from '../../../../assets/icons/5365678_fb_facebook_facebook logo_icon.png'
import share from '../../../../assets/icons/share_929468.png'
import clap from '../../../../assets/icons/clapping_1961454.png'
import HeadingName from '../HeadingName';
import Nav from './Nav';


const SingleComponent = ({ type }) => {
  const id = useParams().id
  const data = useContext(store)
  return (
    <div>
    <Nav/>
    <div className="single-card">
      <div className="center-card">
        <div className="latest-card">

          {
            data.user.filter((element) => element.id == id && element.type === type).map((elem) => {
              return (
                <div>

              
                  <div className="card" >
                    <div className="card-body">
                      <div className="card-title">{elem.title ? elem.title : ''} </div>


                    </div>

                    <div className="user-data">
                <div className="left">
                <div className="user-img">
                <img src={profile} alt="" />
                </div>
                <div className="user-name card-body">
                <h4>{elem.user.name}</h4>
                <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022</div>
                </div>
                </div>
                <div className="right">
                  <div className="soc">
                  <img src={fb} alt="" />
                  </div>
                  <div className="soc">
                  <img src={inst} alt="" />
                  </div>
                  <div className="soc">
                  <img src={twt} alt="" />
                  </div>
                  <div className="soc">
                  <img src={yt} alt="" />
                  </div>

                </div>
                </div>
                    <div className="card-img">
                      <img src={`${elem.img_url}`} alt="" />

                    </div>
                    <div className="card-body">
                      <div className="para">{elem.content ? elem.content : ''}</div>
                        <div className="other-img">
                        <img src={`${elem.img_url}`} alt="" />
                        </div>

                        <div className="clap">
                        <div className="chips">
                          <div className="chip">Amit</div>
                          <div className="chip">Ravi</div>
                          <div className="chip">Rahul</div>
                          <div className="chip">Sonu</div>

                          

                        </div>
                        <div className="clp">
                        <img src={clap} alt="" />
                        9.3K claps
                        </div>
                        </div>

                    </div>
                    <div className="user-data">
                <div className="left">
                <div className="user-img">
                <img src={profile} alt="" />
                </div>
                <div className="user-name card-body">
                <div className='dates'><span style={{fontWeight:"bold"}}></span>Writen By</div>

                <h4>{elem.user.name}</h4>
                <div className='dates'><span style={{fontWeight:"bold"}}>Travel</span> / 4dec 2022 10 mins read</div>
                </div>
                </div>
               
                </div>
                    
                  </div>


                </div>
              )
            })
          }
        </div>

      </div>




    </div>
    <div className="clap unique">
 
    <div className="clp">
    <img src={clap} alt="" />
    9.3K claps
    </div>
    <div className="clp">
    <img src={share} alt="" />
   share this article
    </div>
    </div>
  

    <Card data={data} type={type}/>

    </div>
  )
}

export default SingleComponent
