import "./styles.css";

const ActivityMenu = (props) => {
  const attrSelectHandler = (e) => {};

  const cancelHandler = () => {
    // here we pass null so no attribute is selected
    props.menuClose(null);
  };

  return (
    <div className="activityMenu">
      {/* <img
        className="abilityImage"
        src={require(`../assets/${props.attribute}.png`)}
        alt={props.attribute}
      /> */}
      <h3>{props.attribute.toUpperCase()}</h3>
      <form>
        <div>
          <label>Activity</label>
          <input className="menuInput" type="text" value="Activity name" />
        </div>
        <div>
          <label>Date</label>
          <input className="menuInput" type="text" value="Date" />
        </div>
        <div>
          <label>Duration</label>
          <input className="menuInput" type="text" value="Duration" />
        </div>
        <div>
          <label>Count</label>
          <input className="menuInput" type="text" value="Count" />
        </div>
        <div>
          <label>Notes</label>
          <input className="menuInput" type="text" value="Notes" />
        </div>
      </form>
      <div className="buttons">
        <button className="menuButton" onClick={cancelHandler}>
          Add
        </button>
        <button className="menuButton" onClick={cancelHandler}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ActivityMenu;
