import React from 'react'
import './Stories.css'
// import jenny from "../../assets/jenny2.png";
import profile from "../../assets/jenny.png";
import blogPic from "../../assets/Rectangle 2977.png";
import Story from '../../components/TopStory/Story'
import { Link } from 'react-router-dom'
import Heading from '../../components/heading/Heading'
import { cardsData } from '../Homepage/cardsData'
// import Writer from '../../components/writers/Writer';

export default function Stories() {
  return (
    <>
        <div className="second-port ">
        <div className="trending po">
     <div className='posting'>
     <Link to='./Stories'>
            <Heading statement="Top Stories"  />

            </Link>
            <div className="store">
              {cardsData.map((item, index) => (
                <Link to="/post">
                  <Story
                    image={blogPic}
                    key={index}
                    name={item.name}
                    heading={item.heading}
                    pic={profile}
                    time={item.time}
                    shows = {true}
                  />
                </Link>
              ))}
          </div>
     </div>
          {/* <div className="top-stories t top-t">
         
            <Heading statement="Top writers"  />
            <div className="top-writers">
              {cardsData.map((item, index) => (
                <Writer
                                  key={index}
                  image={jenny}
                  name={item.name}
                  scope="Fashion designer, Blogger, activist"
                />
              ))}
            </div>
          </div>
     
            </div> */}
        </div>
        </div>

    </>
  )
}
