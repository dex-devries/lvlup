import "./ActivityMenu.css";
import plusButton from "../../assets/no-bg/plus-nobg-theme.png";
import minusButton from "../../assets/no-bg/minus-nobg-theme.png";
import addActivityImg from "../../assets/add-removebg.png";
import cancelActivityImg from "../../assets/cancel-nobg.png";
import backButtonImg from "../../assets/no-bg/back-nobg.png";

import React, { useRef } from "react";

// Expected props:
// attribute string - the selected attribute for the menu
// menuClose(attribute) - function passed from Grid, menuClose(null) closes window
// dataHandler(data) - App <-> Grid <-> ActivityMenu - passes data back to App
// TODO: fix buttons to be square with small images and hover 
const ActivityMenu = (props) => {
  // refs for all input fields
  const activityInputRef = useRef();
  const dateInputRef = useRef();
  const durationHrInputRef = useRef();
  const durationMinInputRef = useRef();
  const durationSecInputRef = useRef();
  const countInputRef = useRef();
  const notesInputRef = useRef();

  // TODO: abstract code block to new file
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

  // increment -> 1 or -1
  const countIncrementHandler = (increment) => {
    // conditional to not allow negative count
    if (Number(countInputRef.current.value) > 0 || increment === 1) {
      const value = Number(countInputRef.current.value) + increment;
      countInputRef.current.value = value.toString();
    }
  };

  // increment -> 15 for seconds, 60 for minute, 3600 for hour
  const durationIncrementHandler = (increment) => {
    // calculate duration in seconds
    let duration = Number(durationHrInputRef.current.value) * 3600 +
    Number(durationMinInputRef.current.value) * 60 +
    Number(durationSecInputRef.current.value);
    // console.log(duration);

    duration += increment;

    // find hrs mins sec from seconds
    const hours = Math.floor(duration / 3600);
    const mins = Math.floor( (duration - (hours * 3600)) / 60 );
    const secs = duration - (hours * 3600) - (mins * 60);

    // console.log(hours);
    // console.log(mins);
    // console.log(secs);

    durationHrInputRef.current.value = hours.toString();
    durationMinInputRef.current.value = mins.toString();
    durationSecInputRef.current.value = secs.toString();

  };

  return (
    <div className="activityMenu">
      <div className="menuHeader">
        <img
          className="menuImage"
          src={require(`../../assets/no-bg/${props.attribute}.png`)}
          alt={props.attribute}
        />
        <h2 className="menuAttrHead">{props.attribute.toUpperCase()}</h2>
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
        <div className="durMenuLabel">
          <label>Duration</label>
          <div className="menuTime">
            <div className="durationBlock">
              <img
                className="plusButtonSm"
                src={plusButton}
                alt="count increment button"
                onClick={() => durationIncrementHandler(3600)}
              />
              <input
                className="menuTimeInput"
                type="number"
                placeholder="hr"
                min="0"
                max="23"
                ref={durationHrInputRef}
                onBlur={() => durationIncrementHandler(0)}
              />
            </div>
            
            <div className="durationBlock">
              <img
                className="plusButtonSm"
                src={plusButton}
                alt="count increment button"
                onClick={() => durationIncrementHandler(60)}
              />
              <input
                className="menuTimeInput"
                type="number"
                placeholder="min"
                min="0"
                max="59"
                ref={durationMinInputRef}
                onBlur={() => durationIncrementHandler(0)}
              />
            </div>
            
            <div className="durationBlock">
              <img
                className="plusButtonSm"
                src={plusButton}
                alt="count increment button"
                onClick={() => durationIncrementHandler(15)}
              />
              <input
                className="menuTimeInput"
                type="number"
                placeholder="sec"
                min="0"
                max="59"
                ref={durationSecInputRef}
                onBlur={() => durationIncrementHandler(0)}
              />
            </div>
          </div>
        </div>
        <div className="menuLabel">
          <label>Count</label>
          <div className="countInputDiv">
            <img
              className="plusButton"
              src={plusButton}
              alt="count increment button"
              onClick={() => countIncrementHandler(1)}
            />
            <input
              className="countInput"
              type="number"
              min="1"
              placeholder="count"
              ref={countInputRef}
            />
            <img
              className="minusButton"
              src={minusButton}
              alt="count decrement button"
              onClick={() => countIncrementHandler(-1)}
            />
          </div>
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
          <button title="Add activity" type="submit" className="menuButton1">
            {/* Add */}
            <img className="addActivityImg" src={addActivityImg} alt="add activity" />
          </button>
          <button title="Back" className="menuButton1" onClick={cancelHandler}>
            {/* Cancel */}
            <img className="backImg" src={backButtonImg} alt="back" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActivityMenu;
