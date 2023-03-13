import "./styles.css";

const ActivityMenu = (props) => {
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

  // Needs logic for data
  const addHandler = () => {
    // here we pass null so no attribute is selected
    props.menuClose(null);
  };

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
        <div className="menuLabel">
          <label>Activity</label>
          <input
            className="menuInput"
            type="text"
            defaultValue="Activity name"
            onChange={null}
          />
        </div>
        <div className="menuLabel">
          <label>Date</label>
          <input
            className="menuInput"
            type="date"
            min="2001-01-01"
            max={today}
            value={today}
            onChange={null}
          />
        </div>
        <div className="menuLabel">
          <label>Duration</label>
          <div className="menuInput menuTime">
            <input
              className="menuTimeInput"
              type="number"
              value="00"
              onChange={null}
            />
            :
            <input
              className="menuTimeInput"
              type="number"
              value="00"
              onChange={null}
            />
            :
            <input
              className="menuTimeInput"
              type="number"
              value="00"
              onChange={null}
            />
          </div>
        </div>
        <div className="menuLabel">
          <label>Count</label>
          <input
            className="menuInput"
            type="text"
            value="Count"
            onChange={null}
          />
        </div>
        <div className="menuLabel">
          <label>Notes</label>
          <input
            className="menuInput"
            type="text"
            value="Notes"
            onChange={null}
          />
        </div>
      </form>
      <div className="buttons">
        <button className="menuButton" onClick={addHandler}>
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
