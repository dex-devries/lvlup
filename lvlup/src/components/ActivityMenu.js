import "./ActivityMenu.css";

import React, { useRef } from "react";

const ActivityMenu = (props) => {
  // refs for all input fields
  const activityInputRef = useRef();
  const dateInputRef = useRef();
  const durationHrInputRef = useRef();
  const durationMinInputRef = useRef();
  const durationSecInputRef = useRef();
  const countInputRef = useRef();
  const notesInputRef = useRef();

  // This whole code block just to style date correctly for dynamic max date :`(
  const date = new Date(Date.now());
  // console.log(date.getDay());
  let today =
    date.getFullYear() +
    "-" +
    ((date.getMonth() + 1).toString().length === 1
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) +
    "-" +
    (date.getDate().toString().length === 1
      ? "0" + date.getDate()
      : date.getDate());
  // console.log(today);
  // End spaghetti

  // Needs logic for data - this is submit form
  const addHandler = () => {
    // build data object to pass up
    const activity = {
      id:
        dateInputRef.current.value +
        "-" +
        Math.floor(Math.random() * 10000000).toString(),
      attribute: props.attribute,
      activity: activityInputRef.current.value,
      date: dateInputRef.current.value,
      duration:
        durationHrInputRef.current.value +
        ":" +
        durationMinInputRef.current.value +
        ":" +
        durationSecInputRef.current.value,
      count: countInputRef.current.value,
      notes: notesInputRef.current.value,
    };
    // console.log(activity);

    // here we pass null so no attribute is selected
    props.dataHandler(activity);
    props.menuClose(null);
  };

  const cancelHandler = () => {
    // here we pass null so no attribute is selected
    props.menuClose(null);
  };

  return (
    <div className="activityMenu">
      <div className="menuHeader">
        <img
          className="menuImage"
          src={require(`../assets/no-bg/${props.attribute}.png`)}
          alt={props.attribute}
        />
        <h3 className="menuAttrHead">{props.attribute.toUpperCase()}</h3>
      </div>
      <form onSubmit={addHandler}>
        <div className="menuLabel">
          <label>Activity</label>
          <input
            className="menuInput"
            type="text"
            placeholder="Activity name"
            ref={activityInputRef}
            required
          />
        </div>
        <div className="menuLabel">
          <label>Date</label>
          <input
            className="menuInput"
            type="date"
            min="2022-01-01"
            max={today}
            defaultValue={today}
            ref={dateInputRef}
          />
        </div>
        <div className="menuLabel">
          <label>Duration</label>
          <div className="menuInput menuTime">
            <input
              className="menuTimeInput"
              type="number"
              placeholder="hr"
              min="0"
              max="23"
              ref={durationHrInputRef}
            />
            :
            <input
              className="menuTimeInput"
              type="number"
              placeholder="min"
              min="0"
              max="59"
              ref={durationMinInputRef}
            />
            :
            <input
              className="menuTimeInput"
              type="number"
              placeholder="sec"
              min="0"
              max="59"
              ref={durationSecInputRef}
            />
          </div>
        </div>
        <div className="menuLabel">
          <label>Count</label>
          <input
            className="menuInput"
            type="number"
            placeholder="Count"
            ref={countInputRef}
          />
        </div>
        <div className="menuLabel">
          <label>Notes</label>
          <textarea
            rows="3"
            className="menuInput notesInput"
            type="text"
            placeholder="Notes"
            ref={notesInputRef}
          />
          {/* <input
            className="menuInput notesInput"
            type="text"
            placeholder="Notes"
            ref={notesInputRef}
          /> */}
        </div>
        <div className="buttons">
          <button type="submit" className="menuButton">
            Add
          </button>
          <button className="menuButton" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityMenu;
