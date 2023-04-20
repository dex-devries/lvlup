import "./Badge.css";
// import BadgesModal from "./BadgesModal";
// import ReactDOM from "react-dom";
import React, { useState } from "react";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {
  const [badgeWindowOpen, setBadgeWindowOpen] = useState(false);

  const badgeClickHandler = () => {
    console.log("clicked badge");
  }

  return (
    <div className="badge" onClick={badgeClickHandler}>
      <img className="badgeImg" src={props.image} alt="badge" />
    </div>
  );
};

export default Badge;
