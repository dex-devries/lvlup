import ActivityDate from "./ActivityDate";
import "./Activity.css";

const Activity = (props) => {
  // TESTING
  console.log(props.data);

  return (
    <div className="activityCard">
      <ActivityDate date={props.data.date} />

      <span className="detailsContainer">
        <h2 className="activityTitle">{props.data.activity}</h2>
      </span>
    </div>
  );
};

export default Activity;
