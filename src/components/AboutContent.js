import "./AboutContent.css";
import React from 'react';
import { Link } from 'react-router-dom';
import HerryImg from "../assets/Herry-img.png";


const AboutContent = () => {
  return (
    <div className="about-div">
        <div className="left">
            <h1>WHO AM I?</h1>
            <p>From a Customer Success Manager in the electronics industry, as I delved deeper into the world of electronics sales, I noticed a growing trend in the industry—online platforms were becoming the go-to marketplace for buyers and sellers alike. With this realization, I saw a chance to bridge the gap between sales and full-stack development to create a seamless and unique experience for both parties.</p>

            <p>The early days of my career were filled with challenges, but I welcomed them with open arms. I joined a dynamic startup, where I had the opportunity to work on diverse projects ranging from e-commerce platforms to social networking apps. These experiences not only expanded my technical proficiency but also taught me the value of teamwork, time management, and innovation.</p>

            <p>Over the past several months, I've embarked on a remarkable journey, collaborating remotely with individuals spread across three different time zones—UTC-6, UTC+1, and UTC+5. This unique experience has not only honed my adaptability but also made me stand out from the crowd. Working seamlessly across these diverse time zones showcases my exceptional ability to connect and excel in a globalized world.</p>

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