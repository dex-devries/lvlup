import { badgeCollector } from "../Logic/badgeCollectionHandler";
import "./BadgeWindow.css";

const BadgeWindow = (props) => {
  console.log(props.stats);
  const badges = badgeCollector(props.stats);
  const images = require.context("../../assets/icons/badges", true);

  let badgesJSX = [];
  for (let attr in badges) {
    badgesJSX.push(<h2 key={attr} className="badgeAttrHead">{attr.toUpperCase()}</h2>);

    let attrBadges = [];
    for (let badge of badges[attr]) {
        // logic to exclude targeting.png - by default included from badgeHandler
        if (badge[0] !== './targeting.png') {
            // push badge img JSX
            attrBadges.push(<img className="badgeImg" src={images(badge[0])} key={badge[0]} alt="badge"/>);
        }      
    }

    badgesJSX.push(<div className="attrBadgesContainer" key={attr+"BadgesContainer"}>{attrBadges}</div>)
  }

  return <div className="badgeWindowCard">{badgesJSX}</div>;
};

export default BadgeWindow;
