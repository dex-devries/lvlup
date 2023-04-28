import "./StatsWindow.css";
import backButton from "../../assets/no-bg/back-nobg.png";
import History from "./History";
import React, {useState} from 'react';

// Expected props:
// close() - closes window with null argument (close(null)) -> Grid.js
// attribute string - the selected attribute for window TODO condition for power, which is all attrs combined
// data object - an object that is a list of all activities from App.js -> Grid.js -> StatsWindow.js

// TODO:
// migrate activities list to History.js
// add 3 tabs at top of screen
// "Stats" "Notes" "History"

const StatsWindow = (props) => {
  const cancelHandler = () => {
    props.close(null);
  };

  const [history, setHistory] = useState(true);
  const [stats, setStats] = useState(false);
  const [notes, setNotes] = useState(false);

  let contentJSX = <></>;

  if (stats) {

  }
  else if (notes) {

  }

  else if (history) {
    contentJSX = <History attribute={props.attribute} data={props.data}/>
  }

  return (
    <>
      {/* <div className="backButtonContainer"> */}
        {/* <button
          title="Return to main menu"
          className="backButton"
          onClick={cancelHandler}
        >
          <img className="backButtonImg" src={backButton} alt="rback button" />
        </button> */}
      {/* </div> */}
      <nav className="tabs">
      <button
          title="Return to main menu"
          className="backButton"
          onClick={cancelHandler}
        >
          <img className="backButtonImg" src={backButton} alt="rback button" />
        </button>

        <button className={stats ? "tab tab-active" : "tab"} onClick={() => {
          setStats(true);
          setNotes(false);
          setHistory(false);

        }}> Stats
        </button>
        <button className={notes ? "tab tab-active" : "tab"} onClick={() => {
          setNotes(true);
          setStats(false);
          setHistory(false);
        }}> Notes
        </button>
        <button className={history ? "tab tab-active" : "tab"} onClick={() => {
          setHistory(true);
          setNotes(false);
          setStats(false);
        }}> History
        </button>
      </nav>
        <div className="content">
          {contentJSX}
        </div>

      {/* <div className="activitiesList">{activitiesJSX}</div> */}
    </>
  );
};

export default StatsWindow;
