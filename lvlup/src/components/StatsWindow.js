import "./StatsWindow.css";
import Activity from "./Activity";

// Expected props:
// close() - closes window with null argument (close(null)) -> Grid.js
// attribute string - the selected attribute for window TODO condition for power, which is all attrs combined
// data object - an object that is a list of all activities from App.js -> Grid.js -> StatsWindow.js
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
  console.log(`Testing data selection for attribute '${props.attribute}' in StatsWindow.js`);
  console.log(selectData);

  return (
    <div className="">
      <Activity attribute={props.attribute} data={selectData} />
      <button className="menuButton" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
};

export default StatsWindow;
