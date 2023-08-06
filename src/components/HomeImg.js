import "./HomeImg.css";
import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from "../assets/White-smoke.mp4"
import HerryHomeImg from "../assets/Herry-home-img.png"

const HomeImg = () => {
  return (
    <div className="home-div">
        <div className="mask">
        <video className="intro-img" autoPlay loop muted>
          <source src={IntroImg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        <div className="content">
          <img src={HerryHomeImg} alt="Hermon" className="herryHomeImg"/>
          <p>Hello, I'm Hermon Gebrehiwot.</p>
          <p>Full-Stack developer!</p>
          <h1>Welcome to my world of code, creativity, and passion for technology! With a robust expertise in crafting streamlined software applications for the international market, backed by over 1300 hours of experience, including successful mentorship of 10+ junior developers towards achieving tangible objectives within tight timelines. Proficient in React, Redux, JavaScript, Ruby on Rails, Figma, and Animation Libraries.</h1>
          <div>
            <Link to={"/Projects"} className="btn">Projects</Link>
            <Link to={"/Contact"} className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HomeImg;