import React from "react";
import PageHeader from "../../components/Pageheader/PageHeader";
import About from "../../assets/About.png";
import './AboutUs.css';
import ImageSet from "../../components/ImageSet/ImageSet";

export default function AboutUs() {
  return (
    <>
        <div className="about">
            <div className="contain">
        <div className="about-us">
            <div className="left-side">
            <ImageSet Image={About} />

            </div>
        <div className="about-para">
            <h4>About Us</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            facere, magnam consectetur assumenda aliquam, quasi neque quia quae
            beatae amet expedita sequi eum inventore tempora quo nemo saepe, ea
            accusamus id? Distinctio quaerat doloremque excepturi, fugiat quos
            nihil provident doloribus voluptatum, laboriosam nisi nemo cum.
            Deleniti accusantium iste ex dignissimos repudiandae. Vero numquam
            mollitia ut magni facere repellat perferendis quam.
          </p>
        </div>
        </div>

        <div className="mission">
        <div className="about-para">
            <h4>Mission and Vision</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            facere, magnam consectetur assumenda aliquam, quasi neque quia quae
            beatae amet expedita sequi eum inventore tempora quo nemo saepe, ea
            accusamus id? Distinctio quaerat doloremque excepturi, fugiat quos
            nihil provident doloribus voluptatum, laboriosam nisi nemo cum.
            Deleniti accusantium iste ex dignissimos repudiandae. Vero numquam
            mollitia ut magni facere repellat perferendis quam.
          </p>

      </div>
            <div className="left-side">
            <ImageSet Image={About} />
            </div>
       </div>
      </div>
      </div>      
    </>
  );
}
