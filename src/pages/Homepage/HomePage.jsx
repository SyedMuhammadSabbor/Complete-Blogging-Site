import React from "react";
import "./homePage.css";
import profile from "../../assets/jenny.png";
import jenny from "../../assets/jenny2.png";
import blogPic from "../../assets/Rectangle 2977.png";
import Card from "../../components/Card/Card";
import { cardsData } from "./cardsData";
import Blog from "../../components/Blogs/Blog";
import Story from "../../components/TopStory/Story";
import Heading from "../../components/heading/Heading";
import Writer from "../../components/writers/Writer";
import { Data } from "./Data";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";

export default function HomePage() {
  return (
    <>
      <section className="first-port"></section>
      <section className="second-port">
        <div className="trending">
          <Heading statement="Trending" option="" />

          <div className="cards">
            {cardsData.slice(0, 8).map((item, index) => (
              <Card
                key={index}
                name={item.name}
                heading={item.heading}
                date={item.date}
                pic={profile}
                time={item.time}
                info={item.info}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="third-port">
        <div className="double">
          <div className="blogs">
            {cardsData.map((item, index) => (
                <Blog
                  image={blogPic}
                  key={index}
                  name={item.name}
                  heading={item.heading}
                  date={item.date}
                  pic={profile}
                  time={item.time}
                  info={item.info}
                  showShadow={false}
                />
            ))}
          </div>
          <div className="top-stories">
            <Link to='./Stories'>
            <Heading statement="Top Stories" option="View all" />

            </Link>
            <div className="store">
              {cardsData.slice(0, 5).map((item, index) => (
                <Link to="/post">
                  <Story
                    image={blogPic}
                    key={index}
                    name={item.name}
                    heading={item.heading}
                    pic={profile}
                    time={item.time}
                    shows= {false}
                  />
                </Link>
              ))}
            </div>
            <Link to='./stories'>
            <Heading statement="Top writers" option="View all" />

            </Link>
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
            <div className="quick-stats">
              <Heading statement="Quick Stats" option="" />
              <div className="stats">
                {Data.slice(0, 4).map((item, index) => (
                  <div className="stat">
                    <span className="digit">{item.digit}</span>
                    <p>{item.stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="quick-stats">
              <Heading statement="Categories" option="View all" />
              <div className="categories">
                {Data.map((item, index) => (
                  <div className="category">
                    <p>{item.stat}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="ads">
              <span className="text">Ads</span>
              <div className="detail">
                <h5>want to travel sikkim by car?</h5>
                <p>
                  Lorem ipsum dolor, in minima. iure consectetur numquam labore
                  voluptas cumque qui harum animi obcaecati quibusdam tenetur
                  enim id voluptates.{" "}
                </p>
                <button>visit us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
