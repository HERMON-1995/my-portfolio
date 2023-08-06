import "./AboutContent.css";
import React from 'react';
import { Link } from 'react-router-dom';
import HerryImg from "../assets/Herry-img.png";


const AboutContent = () => {
  return (
    <div className="about-div">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>My fascination with technology started at a young age when I got my hands on my first computer. The joy of exploring this digital playground ignited a curiosity that never ceased to grow. As I delved deeper into the realms of software and programming, I realized that the power to create and solve problems lay right at my fingertips.</p>

            <p>The early days of my career were filled with challenges, but I welcomed them with open arms. I joined a dynamic startup, where I had the opportunity to work on diverse projects ranging from e-commerce platforms to social networking apps. These experiences not only expanded my technical proficiency but also taught me the value of teamwork, time management, and innovation.</p>

            <p>Beyond the confines of code, I have a penchant for adventure and exploration. When I'm not glued to my computer screen, you can find me hiking through scenic trails or trying my hand at photography. These pursuits rejuvenate my mind and keep the creative juices flowing.</p>

            <p>Thank you for visiting my portfolio website. Let's make technology an instrument of boundless creativity and progress. Together, we can create magic!</p>
            <Link to="/Contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="herryimg-container">
              <div className="herryimg-div top">
                  <img src={HerryImg} alt="Hermon" className="herryimg"/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent;