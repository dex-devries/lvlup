import ActivityDate from "./ActivityDate";
import "./Activity.css";
import expandButton from "../../assets/no-bg/down-arrow-nobg.png";
import collapseButton from "../../assets/no-bg/collapse-arrow-nobg.png";
import React, { useState } from "react";


const Activity = (props) => {
  // TESTING
  // console.log(props.data);

  // state for expansion
  const [expanded, setExpanded] = useState(false);

  const expandActivity = () => {
    // console.log("expand");
    setExpanded(true);
  };

  const collapseActivity = () => {
    // console.log("collapse");
    setExpanded(false);
  }

  // logic for expansion (changes className of activityCard)
  let cardClass = "activityCard";
  cardClass += expanded ? " activityCardExpanded" : "";
  // logic for JSX for activity details
  // let detailsJSX = expanded ? <div className="detailsContainer"></div> : <></> ;
  let detailsJSX = <></>;
  if (expanded) {
    detailsJSX = <div className="detailsContainer">
      <p>Duration: {props.data.duration} </p><p> Count: {props.data.count} </p><p> Notes: {props.data.notes} </p>
    </div>
  }

  return (
    <div className={cardClass} onClick={expanded ? collapseActivity : expandActivity}>
      <ActivityDate date={props.data.date} />
      <span className="titleContainer">
        <h2 className="activityTitle">{props.data.activity}</h2>
        <button className="expandButton" onClick={expanded ? collapseActivity : expandActivity}>
          <img
            className="expandButtonImg"
            alt="expand button"
            src={expanded ? collapseButton : expandButton}
          ></img>
        </button>
      </span>
      {detailsJSX}
    </div>
  );
};

export default Activity;
