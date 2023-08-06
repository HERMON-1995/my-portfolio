import "./Footer.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-div">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "#fff",marginRight: "2rem" }}/>
                    <div>
                        <p>Lukuli.</p>
                        <p>Kampala, Uganda.</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{ color: "#fff",marginRight: "2rem" }}/>
                  +256-752-174-023</h4>
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{ color: "#fff",marginRight: "2rem" }}/>
                  hermonghiwot1995@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About My Mindset</h4>
                <p>I'm Not a Great Programmer, I'm Just a Good Programmer With Great Habits.👩‍💻</p>
                <div className="social">
                  <NavLink to="https://www.facebook.com/hermon.gebrehiwot.16/">
                    <FaFacebook size={30} style={{ color: "#fff",marginRight: "1rem" }}/>
                   </NavLink>
                   <NavLink to="https://twitter.com/HerryWebDevelop">
                    <FaTwitter size={30} style={{ color: "#fff",marginRight: "1rem" }}/>
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/hermon-gebre/">
                      <FaLinkedin size={30} style={{ color: "#fff",marginRight: "1rem" }}/>
                    </NavLink>
                    <NavLink to="https://github.com/HERMON-1995">
                      <FaGithub size={30} style={{ color: "#fff",marginRight: "1rem" }}/>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer