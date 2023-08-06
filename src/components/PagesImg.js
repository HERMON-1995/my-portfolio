import "./PagesImg.css";
import React from 'react';

const PagesImg = ({ heading, text }) => {
    return (
      <div className="project-div">
        <div className="heading">
          <h1>{heading}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
  };  

export default PagesImg;