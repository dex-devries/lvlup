
import "./Badge.css";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {

  return (
    <div className="badge">
      <img className="badgeImg" src={props.image} alt="badge" />
    </div>
  );
};

export default Badge;
