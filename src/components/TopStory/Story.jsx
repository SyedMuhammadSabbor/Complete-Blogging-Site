import React from 'react'
import { MdOutlineAccessTime } from 'react-icons/md'
import './Story.css'
export default function Story(props) {
  const styling = props.shows
    ? {
        width: '230px',
        minHeight: '180px',
        maxHeight: '220px',
      }
    : {};
    const des = props.show
    ? {
       display : 'flex' ,
        fontSize: '20px',
        padding : '0 0.4rem'
      }
    : {};
   
  return (
    <>  <div className="story">
    <div style={styling} className="blog-images">
      <img src={props.image} alt="" srcset="" />
    </div>
    <div className="about-story">
      <button className="travel">Travel</button>
      <div style={des} className="titling">{props.heading}</div>
      <div className="users">
     <div className="fixing">
     <div className="round-images">
          <img src={props.pic} alt="" className="src" />
        </div>
        <span>{props.name}</span>
        <div className="lines"></div>

     </div>
        <div className="adjusts">
          <div className="sets">
            <div>
              <MdOutlineAccessTime />
            </div>  
            <span>{props.time}</span>

          </div>
        </div>
      </div>

    </div>
  </div>
    </>
  )
}
