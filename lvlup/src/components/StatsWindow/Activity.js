import ActivityDate from "./ActivityDate";
import "./Activity.css";
import expandButton from "../../assets/no-bg/down-arrow-nobg.png";
import collapseButton from "../../assets/no-bg/collapse-arrow-nobg.png";
import React, { useState } from "react";

// Expected props:
// data object - the object data for the activity. Contains:
// -- activity string - activity title/description
// -- date string - format "YYYY-MM-DD"
// -- duration string - format "HH:MM:SS"
// -- count number
// -- notes string
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
  };

  // logic for expansion (changes className of activityCard)
  let cardClass = "activityCard";
  cardClass += expanded ? " activityCardExpanded" : "";
  // logic for JSX for activity details
  // let detailsJSX = expanded ? <div className="detailsContainer"></div> : <></> ;
  let detailsJSX = <></>;
  if (expanded) {
    detailsJSX = (
      <div className="detailsContainer">
        <p className="detail">Duration: {props.data.duration} </p>
        <p className="detail">Count: {props.data.count} </p>
        <p className="detail">Notes: {props.data.notes} </p>
      </div>
    );
  }

  // logic for collapsing Activity header text (props.data.activity)
  let activityTitle = props.data.activity.length >= 20 ? props.data.activity.slice(0, 16) + "..." : props.data.activity;
  if (expanded) {
    activityTitle = props.data.activity;
  }

  return (
    <>
      {/* Conditional for onClick function to expand or collapse*/}
      <div
        className={cardClass}
        onClick={expanded ? collapseActivity : expandActivity}
      >
        <ActivityDate date={props.data.date} />
        <span className="titleContainer">
          <h2 className="activityTitle">{activityTitle}</h2>
          {/* Conditional for onClick function to expand or collapse*/}
          <button
            className="expandButton"
            onClick={expanded ? collapseActivity : expandActivity}
          >
            {/* Conditional for arrow img src to rotate arrow on expand/collapse*/}
            <img
              className="expandButtonImg"
              alt="expand button"
              src={expanded ? collapseButton : expandButton}
            ></img>
          </button>
        </span>
        {/* The array of the details elems - appended here as children to activityCard div */}
        {detailsJSX}
      </div>
    </>
  );
};

export default Activity;
