import React, { useEffect } from 'react';
import './Posts.css';
import Blog from '../../components/Blogs/Blog';
import Heading from '../../components/heading/Heading';
import Story from '../../components/TopStory/Story';
import Writer from '../../components/writers/Writer';
import blogPic from "../../assets/Rectangle 2977.png";
import profile from "../../assets/jenny.png";
import { cardsData } from '../Homepage/cardsData';
import jenny from "../../assets/jenny2.png";
import { Link } from 'react-router-dom';

const blogData = {
  heading: "I Created a Developer Rap Video - Here's What I Learned",
  name: "jenny kia",
  date: "02 December 2022",
  time: "3 min. To read",
  info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut nostrum repellendus rem cumque, dolorum voluptate culpa labore doloremque sed, architecto expedita quibusdam, voluptatem non facere dolores perspiciatis pariatur magnam voluptatibus!"
};

export default function Posts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="complete">
      <section>
        <div className="doub">
          <div className="post">
            <Blog
              image={blogPic}
              name={blogData.name}
              heading={blogData.heading}
              date={blogData.date}
              pic={profile}
              time={blogData.time}
              info={blogData.info}
              showShadow={true}
            />
          </div>
          <div className="top-stories t">
            <Heading statement="Top Stories"  />

            <div className="store">
              {cardsData.slice(0, 5).map((item, index) => (
                <Story
                  image={blogPic}
                  key={index}
                  name={item.name}
                  heading={item.heading}
                  pic={profile}
                  time={item.time}
                />
              ))}
            </div>
            <Heading statement="Top writers" />
            <div className="top-writers">
              {cardsData.slice(0, 5).map((item, index) => (
                <Writer
                  key={index}
                  image={jenny}
                  name={item.name}
                  scope="Fashion designer, Blogger, activist"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
