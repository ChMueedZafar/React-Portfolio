import "./WorkCardStyles.css";
import WorkCardData from "./WorkCardData";
import WorkCard from "./WorkCard"; 
import React from 'react';

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => (
          <WorkCard
            key={ind}
            imgsrc={val.imgsrc} 
            title={val.title}
            text={val.text}
            view={val.view}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
