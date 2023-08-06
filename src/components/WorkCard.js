import "./WorkCard.css";
import React from 'react';
import { NavLink } from 'react-router-dom';

const WorkCard = ({imgsrc, title, text, live, source}) => {
  return (
    <div className="project-card">
            <video className="project-img" autoPlay loop muted>
                <source src={imgsrc} type="video/mp4" />
                  Your browser does not support the video tag.
            </video>
            <h2 className="project-title">{title}</h2>
            <div className="project-details">
                <p>{text}</p>
                <div className="project-btns">
                    <NavLink to={live} className="btn">Live</NavLink>
                    <NavLink to={source} className="btn">Source</NavLink>
                </div>
            </div>
          </div>
  )
}

export default WorkCard;