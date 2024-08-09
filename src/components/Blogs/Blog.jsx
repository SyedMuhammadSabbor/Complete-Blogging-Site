import React from "react";
import "./Blog.css";
import { SlCalender } from "react-icons/sl";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Blog(props) {
  const styled = props.showShadow
    ? {
        width: '400px',
        minHeight: '237px',
        maxHeight: '282px',
        marginBottom : '1rem'
      }
    : {};
    const des = props.showShadow
    ? {
       display : 'flex' ,
        fontSize: '20px',
        padding : '0 0.4rem'
      }
    : {};
  const design = props.showShadow
    ? {
        flexDirection: 'column',
        rowGap: '1rem',
        gap : '1rem' ,
        wordSpacing : '2px',
        fontSize : '20px'
      }
    : {};
  const designing = props.showShadow
    ? {
        display: 'flex',
        fontSize: '24px',
        width : '100%',
        marginTop : '1rem',
      }
    : {};

  return (
    <div style={design} className="blog">
      <div style={styled} className="blog-image">
      <Link to="/post">
        <img src={props.image} alt="blog" />
        </Link>
      </div>
      <div className="about-blog">
      <Link to='/createprofile'><button className="travel">Travel</button>
      </Link>
      <Link to="/post">
      <div style={des} className="titles">{props.heading}</div>
      </Link>
        <div style={design} className="users">
          <div className="fixing">
            <div className="round-images">
            <Link to='/createprofile'><img src={props.pic} alt="profile" className="src" />
            </Link>
            </div>
            <span style={des} >{props.name}</span>
            <div className="lines"></div>
          </div>
          <div className="adjusts">
            <div style={des} className="sets">
              <div>
                <SlCalender />
              </div>
              <span style={des}>{props.date}</span>
            </div>
            <div  className="lines"></div>
            <div style={des} className="sets">
              <div>
                <MdOutlineAccessTime />
              </div>
              <span style={des} >{props.time}</span>
            </div>
          </div>
        </div>
        <Link to="/post">
        <p style={designing} className="info">{props.info}</p>
      </Link>
      </div>
    </div>
  );
}
