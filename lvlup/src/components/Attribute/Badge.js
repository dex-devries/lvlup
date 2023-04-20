import "./Badge.css";
import React, { useState } from "react";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {
  const [badgeWindowOpen, setBadgeWindowOpen] = useState(false);

  const badgeClickHandler = () => {
    console.log("clicked badge");
  }

  if (modalOpen) {
    ReactDOM.createPortal(<BadgesModal />, document.getElementById("modal-root"));
  }
  
  return (
    <div className="badge" onClick={badgeClickHandler}>
      <img className="badgeImg" src={props.image} alt="badge" />
    </div>
  );
};

export default Badge;
