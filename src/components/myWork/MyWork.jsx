import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

function MyWork() {
  // State to control the number of projects to show
  const [visibleProjects, setVisibleProjects] = useState(6);

  // Function to handle the "Show More" button click
  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3); // Show 3 more projects each time
  };

  return (
    <div id="work" className="myWork">
      <div className="myWork-title">
        <h1>My Project</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      <div className="myWork-container">
        {mywork_data.slice(0, visibleProjects).map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link ? work.w_link : "#"}
              target={work.w_link && work.w_link.startsWith("http") ? "_blank" : "_self"}
              rel={work.w_link && work.w_link.startsWith("http") ? "noopener noreferrer" : ""}
            >
              <img src={work.w_img} alt={work.w_name} className='projectImage'  />
            </a>
          );
        })}
      </div>
      {/* Show "Show More" button only if there are more projects to show */}
      {visibleProjects < mywork_data.length && (
        <div className="myWork-showmore" onClick={showMoreProjects}>
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
      )}
    </div>
  );
}

export default MyWork;
