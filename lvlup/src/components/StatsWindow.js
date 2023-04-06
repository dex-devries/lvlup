import "./StatsWindow.css";

// Expected props:
// close() - closes window with null argument (close(null)) -> Grid.js
// attribute string - the selected attribute for window TODO condition for power, which is all attrs combined
// data object - an object that is a list of all activities from App.js -> Grid.js -> StatsWindow.js
const StatsWindow = (props) => {
  const cancelHandler = () => {
    props.close(null);
  };

  return (
    <div className="">
      <button className="menuButton" onClick={cancelHandler}>
        Cancel
      </button>
      
      <h4 className="test-header">Testing props.data from App/Grid component \n{JSON.stringify(props.data)}</h4>
    </div>
  );
};

export default StatsWindow;
