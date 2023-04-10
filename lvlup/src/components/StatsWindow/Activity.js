import ActivityDate from "./ActivityDate";
import "./Activity.css";
import expandButton from "../../assets/no-bg/down-arrow-nobg.png";
import React, { useState } from "react";

const Activity = (props) => {
  // TESTING
  console.log(props.data);

  const [expanded, setExpanded] = useState(false);

  const expandActivity = (data) => {
    setExpanded(true);
  };

  // logic for expansion (changes className of activityCard)
  let cardClass = "activityCard";
  cardClass += expanded ? " activityCardExpanded" : "";
  // expanded ? "activityCardExpanded" : "activityCard";

  return (
    <div className={cardClass} onClick={expandActivity}>
      <ActivityDate date={props.data.date} />

      <span className="detailsContainer">
        <h2 className="activityTitle">{props.data.activity}</h2>
        <button className="expandButton" onClick={expandActivity}>
          <img
            className="expandButtonImg"
            alt="expand button"
            src={expandButton}
          ></img>
        </button>
      </span>
    </div>
  );
};

export default Activity;
