import React from 'react'
import logo from '../../assets/headerLogo.webp'
import { Link } from 'react-router-dom'
import HomePage from '../../pages/Homepage/HomePage'
import './Footer.css'
import { IoLogoInstagram } from 'react-icons/io5'
import { GrFacebookOption } from 'react-icons/gr'
import { BiLogoTwitter } from 'react-icons/bi'
import { AiOutlinePinterest } from 'react-icons/ai'

const quicks = ["FAQ" , "Terms & Conditions" ,"Support" ," Privacy Policy"]
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className='outer-side'>
        <div className="inner-side">
            <div className="how-square">
            <div className="logos">
          <img src={logo} alt="logos" className="src" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi distinctio numquam itaque ad explicabo consequatur, perspiciatis modi ducimus! Quos unde officiis incidunt omnis sequi hic!</p>
            </div>
            <div className="quick-links">
                <h4 className='same'>Quick Links</h4>
                {quicks.map((item, index) => (<Link key={index} to={HomePage}>{item}</Link>                ))}
            </div>
            <div className="subscribe quick-links">
                <h4 className='same'>Subscribe for free</h4>
                <form action="">
            <input className='first' type="email" placeholder="Type Email" />
            <input className='second' type="submit"  value="subscribe" />   
            </form>
            <div className="follows">
                 <h4  >Follow on:</h4>
            <div className="social-media-logo">
            <a target='blank' href="https://www.facebook.com/"><GrFacebookOption /></a>
            <a href="https://www.instagram.com/"><IoLogoInstagram /></a>
            <a href="https://x.com/"><BiLogoTwitter /></a>
            <a href=""><AiOutlinePinterest /></a>
        </div>
            </div>
            </div>
        </div>
        <hr />
        <div className="last-line">
            <span>Copyright © 2022 For How Square. All Rights Reserved.</span>
        </div>
        </div>   
      </div>
    </>
  )
}
