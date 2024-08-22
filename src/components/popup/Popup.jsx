import React, { useEffect } from 'react'
import './Popup.css'

import { useNavigate } from 'react-router';

export default function popup() {
    const navigate =useNavigate()
    const handleonClick = () => {
      
        navigate('/');
      };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
  return (
    <>
    <div className="back-g">
    <div className="full">
   <div className="mid">
        <h6>REQUEST SUBMMITTED</h6>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sit qui soluta. In, excepturi facere placeat aperiam ipsa fugiat corporis officiis laudantium quisquam consequat

        </p>
        <button className="btn-login" onClick={handleonClick}>
            HomePage
        </button>
    </div>
   </div>
      
    </div>
    </>
  )
}
