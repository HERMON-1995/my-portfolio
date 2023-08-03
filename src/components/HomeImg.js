import "./HomeImg.css";
import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from "../assets/White-smoke.mp4"

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
          <p>Hello, I'm a Full-Stack developer!</p>
          <h1>Adept at seamlessly integrating front-end finesse and back-end proficiency to deliver innovative and efficient digital solutions.</h1>
          <div>
            <Link to={"/Projects"} className="btn">Projects</Link>
            <Link to={"/Contact"} className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HomeImg;