import "./HomeImg.css";
import React from 'react'
import { Link } from 'react-router-dom';
import IntroImg from "../assets/Home-img.jpg"

const HomeImg = () => {
  return (
    <div className="home-div">
        <div className="mask">
          <img className="intro-img" src={IntroImg} alt="IntroImg"/>
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