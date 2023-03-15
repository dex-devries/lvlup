import { badges } from "../assets/icons/badgeMap";
import "./styles.css";

const Badge = (props) => {
  const level = props.level;
  const attribute = props.attribute;
  let collectedBadges = [["targeting.png", "TARGET ACQUIRED"]];

  // logic to go through badgeMap and collect all badges

  //   let i = 2;
  //   while (i <= level) {
  //     if (badges[attribute][i] !== undefined) {
  //         collectedBadges.push(badges[attribute][i]);
  //     }
  //     i++;
  //   }

  // most recent (highest level) badge from the end of collectedB array
  // [0] index at the end gets path, [1] would get badge name
  const displayBadge =
    "../assets/icons/" + collectedBadges[collectedBadges.length - 1][0];
    
    // const src=require(displayBadge);
    // console.log(src);

  return (
    <div className="badge">
      <img
        className="badgeImg"
        src={require("../assets/icons/targeting.png")}
        alt="badge"
      />
    </div>
  );
};

export default Badge;
