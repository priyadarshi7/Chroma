import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/Images/Apple.webp";
import img2 from "../../assets/Images/Apple.webp";
import img3 from "../../assets/Images/Apple.webp";
import img4 from "../../assets/Images/Apple.webp";
import img5 from "../../assets/Images/Apple.webp";
import img6 from "../../assets/Images/Apple.webp";
import img7 from "../../assets/Images/Apple.webp";
import img8 from "../../assets/Images/Apple.webp";
import img9 from "../../assets/Images/Apple.webp";
import img10 from "../../assets/Images/Apple.webp";
import "./Marquee.css";
export default function Marquees() {
  return (
    <div className="App">
      <div>
        <Marquee speed={100} delay={0}>
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img8} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img9} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img10} alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
