import React from "react";
import "./OurStory.css";
import prog from "../../assets/program.png";

const program = [
  { pic: prog },
  { pic: prog },
  { pic: prog },
  { pic: prog },
  { pic: prog },
  { pic: prog },
];

export default function OurStory() {
  return (
    <>
      <div className="Our-story">
        <div className="container">
          <div className="he1">
            <h3>View programs by age</h3>
          </div>
          <div className="programs">
            {program.slice(0, 5).map((item, index) => (
              <div className="program">
                <img src={item.pic} alt="" />
              </div>
            ))}
            <div className="block">
              <span className="All">All Program</span>
              <span className="btn">Learn more</span>
            </div>
          </div>
          <div className="he1">
            <h3>View programs by type</h3>
          </div>
          <div className="programs">
            {program.slice(0, 5).map((item, index) => (
              <div className="program">
                <img src={item.pic} alt="" />
              </div>
            ))}
            <div className="block">
              <span className="All">All Program</span>
              <span className="btn">Learn more</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
