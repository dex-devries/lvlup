import "./Badge.css";
import BadgesModal from "./BadgesModal";
import ReactDOM from "react-dom";
import React, { useState } from "react";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const hoverEnterHandler = () => {
    setModalOpen(true);
  };

  const hoverExitHandler = () => {
    // console.log("mouse exited badge");
  };

  if (modalOpen) {
    const modalRoot = document.getElementById("modal-root");
    ReactDOM.createPortal(<BadgesModal />, modalRoot);
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
