import "./StatsWindow.css";

// Expected props:
// close() - closes window with null argument (close(null)) -> Grid.js
// attribute string - the selected attribute for window TODO condition for power, which is all attrs combined
// data object - an object that is a list of all activities from App.js -> Grid.js -> StatsWindow.js
const StatsWindow = (props) => {
  const cancelHandler = () => {
    props.close(null);
  };

  console.log("Testing data prop passed from App/Grid");
  console.log(props.data);

  return (
    <div className="">
      <button className="menuButton" onClick={cancelHandler}>
        Cancel
      </button>
    </div>
  );
};

export default StatsWindow;
