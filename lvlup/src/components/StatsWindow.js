import "./StatsWindow.css";

// Expected props:
// 
const StatsWindow = (props) => {
    const cancelHandler = () => {
        props.close(null);
    }
    
    return ( <div className="">
        <button className="menuButton" onClick={cancelHandler}>
            Cancel
          </button>
    </div> );
}
 
export default StatsWindow;