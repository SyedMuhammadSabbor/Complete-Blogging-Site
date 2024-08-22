import React from 'react'
import { BiLogoTwitter } from 'react-icons/bi'
import { GrFacebookOption } from 'react-icons/gr'
import { IoLogoInstagram } from 'react-icons/io5'
import './Writer.css'
import { Link } from 'react-router-dom'
export default function Writer(props) {
  return (
    <>
    <div className='Writers'>
    <div className="round">
    <Link to='/createprofile'> <img src={props.image} alt="" srcset="" /></Link>
        </div>
      <div className="writers-about">
        <Link to='/createprofile'><h3>{props.name}</h3></Link>
      <p className='scope'>{props.scope}</p>
        <div className="social-media-logos">
            <a target='blank' href="https://www.facebook.com/"><GrFacebookOption /></a>
            <a href="https://www.instagram.com/"><IoLogoInstagram /></a>
            <a href="https://x.com/"><BiLogoTwitter />
            </a>
        </div>
      </div>
    </div>
      
    </>
  )
}
