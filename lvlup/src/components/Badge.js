
import "./styles.css";

const Badge = (props) => {

  return (
    <div className="badge">
      {/* <img className="badgeImg" src={require('../assets/icons/badges/targeting.png')} alt="badge" /> */}
      <img className="badgeImg" src={props.image} alt="badge" />
    </div>
  );
};

export default Badge;
