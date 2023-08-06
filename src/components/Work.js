import "./WorkCard.css";
import React from 'react';
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-div">
        <h1 className="project-heading">My Recent Works</h1>
        <div className="project-container">
          {WorkCardData.map((val, ind) => {
            return(
              <WorkCard 
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              live={val.live}
              source={val.source}
              />
            )
          })}
        </div>
    </div>
  )
}

export default Work;