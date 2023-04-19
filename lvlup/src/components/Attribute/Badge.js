import "./Badge.css";
import BadgesModal from "./BadgesModal";
import ReactDOM from "react-dom";
import React, { useState } from "react";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const hoverEnterHandler = () => {
    console.log("mouse entered badge");
    // NOT WORKING
    setModalOpen(true);
  };

  const hoverExitHandler = () => {
    // console.log("mouse exited badge");
  };

  if (modalOpen) {
    ReactDOM.createPortal(<BadgesModal />, document.getElementById("modal-root"));
  }
  
  return (
    <div className="badge">
      <img
        className="badgeImg"
        src={props.image}
        alt="badge"
        onMouseEnter={hoverEnterHandler}
        onMouseLeave={hoverExitHandler}
      />
    </div>
  );
};

export default Badge;
