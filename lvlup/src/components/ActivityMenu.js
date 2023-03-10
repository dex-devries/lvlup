import "./styles.css";

const ActivityMenu = (props) => {
  const attrSelectHandler = (e) => {};

  return (
    <div className="activityMenu">
      <h3>{props.attribute}</h3>
      <form>
        <div>
          <label>Activity</label>
          <input className='menuInput' type="text" value="Activity name" />
        </div>
        <div>
          <label>Date</label>
          <input className='menuInput' type="text" value="Date" />
        </div>
        <div>
          <label>Duration</label>
          <input className='menuInput' type="text" value="Duration" />
        </div>
        <div>
          <label>Count</label>
          <input className='menuInput' type="text" value="Count" />
        </div>
        <div>
          <label>Notes</label>
          <input className='menuInput' type="text" value="Notes" />
        </div>
      </form>
    </div>
  );
};

export default ActivityMenu;
