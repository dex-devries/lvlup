
import { badgeHandler } from "./badgeHandler";

import "./styles.css";

const Badge = (props) => {
  const badgeSrc = badgeHandler(props.level, props.attribute);

  return (
    <div className="badge">
      {/* <img className="badgeImg" src={require('../assets/icons/badges/targeting.png')} alt="badge" /> */}
      <img className="badgeImg" src={badgeSrc} alt="badge" />
    </div>
  );
};

export default Badge;
