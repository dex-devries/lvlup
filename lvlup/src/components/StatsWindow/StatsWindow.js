import "./StatsWindow.css";
import Activity from "./Activity";
import backButton from "../../assets/no-bg/back-nobg.png";

// Expected props:
// close() - closes window with null argument (close(null)) -> Grid.js
// attribute string - the selected attribute for window TODO condition for power, which is all attrs combined
// data object - an object that is a list of all activities from App.js -> Grid.js -> StatsWindow.js

// TODO: fix back button styles
const StatsWindow = (props) => {
  const cancelHandler = () => {
    props.close(null);
  };

  // TESTING
  // console.log("Testing data prop passed from App/Grid");
  // console.log(props.data);

  // LOGIC FOR DATA SELECT
  let selectData = [];
  // select only activities with selected attribute (all activities for power)
  if (props.attribute !== "power") {
    for (let i = 0; i < props.data.length; i++) {
      if (props.data[i].attribute === props.attribute) {
        selectData.push(props.data[i]);
      }
    }
  }
  // for power attr, all activities
  else {
    selectData = props.data;
  }

  // TESTING
  // console.log(`Testing data selection for attribute '${props.attribute}' in StatsWindow.js`);
  // console.log(selectData);

  // generate JSX for Activity components
  // This will be stateful eventually for infinite scroll
  let activitiesJSX = [];
  for (let act of selectData) {
    activitiesJSX.push(<Activity data={act} key={act.id} />);
  }

  // reverse so most recent activities first
  activitiesJSX = activitiesJSX.reverse();

  return (
    <>
      <button className="menuButton" onClick={cancelHandler}>
        <img className="backButtonImg" src={backButton} alt="return to main menu"/>
      </button>
      <div className="activitiesList">{activitiesJSX}</div>
    </>
  );
};

export default StatsWindow;
