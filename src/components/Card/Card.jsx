import React from 'react'
import './Card.css';
import { SlCalender } from 'react-icons/sl';
import { MdOutlineAccessTime } from 'react-icons/md';
import { Link } from 'react-router-dom';
export default function Card(props) {
  return (
    <>
     <div className='Card'>
        <p className='title'>{props.heading}</p>
        <div className="user">
        <div className="round-image">
          <Link to='/createprofile'><img src={props.pic} alt="" className="src" />
          </Link>
        </div>
        <span>{props.name}</span>
        </div>
        <div className="adjust">
            <div className="set">
              <div><SlCalender /></div>
            <span>{props.date}</span> 
            </div>
            <div className="line"></div>
            <div className="set">
              <div><MdOutlineAccessTime /></div>
            <span>{props.time}</span>
            </div>
        </div>
        <p className='info'>{props.info}</p>

        </div> 
    </>
  )
}
