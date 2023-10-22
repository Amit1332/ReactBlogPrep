import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Footer = () => {
  const Navigate = useNavigate()
  return (
    <div>
        <div className="footer">
        <div className="top">     
        <div className="second block">
        <div className="header">
                  <ul>
                  <li onClick={()=>Navigate('/')}><i class="ri-home-smile-line" ></i>Home</li>
                  <li onClick={()=>Navigate('/bollywood')}><i class="ri-shapes-line" ></i>Bollywood</li>
                  <li  onClick={()=>Navigate('/hollywood')}><i class="ri-shapes-line"></i>Hollywood</li>

                  </ul>
            </div>
            <div className="header">
        <ul>
        <li onClick={()=>Navigate('/technology')}><i class="ri-shapes-line" ></i>Technollogy</li>
        <li onClick={()=>Navigate('/food')}><i class="ri-store-2-fill"></i>Food</li>
        <li onClick={()=>Navigate('/fitness')}><i class="ri-shapes-line" ></i>Fitness</li>

        </ul>
  </div>
        
        </div>
       
        <div className="fourth block">
        <div className="header">
        <div className="soc">
        <i class="ri-instagram-line"></i>
        </div>
        <div className="soc">
        <i class="ri-twitter-line"></i>
        </div>
        <div className="soc">
        <i class="ri-facebook-line"></i>
        </div>
        <div className="soc">
        <i class="ri-youtube-line"></i>
        </div>



        </div>
        
        
        </div>


        <div className="copy">
        <div className="">
        &copy;Copyright@2023
        
        </div>
        

        <div className="">
        <i class="ri-git-commit-line"></i>
        <i class="ri-git-commit-line"></i><i class="ri-git-commit-line"></i><i class="ri-git-commit-line"></i><i class="ri-git-commit-line"></i><i class="ri-git-commit-line"></i>
        </div>
        <div className="">
        <i class="ri-seedling-fill"></i> Create by Amitesh <i class="ri-seedling-fill"></i>
        </div>
        </div>
        
        </div>
       
        
        
        </div>
    
    
    </div>
  )
}

export default Footer