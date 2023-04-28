import Activity from "./Activity";
import "./History.css";

const History = (props) => {
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

  return <div className="activitiesList">{activitiesJSX}</div>;
};

export default History;
