import { badgeCollector } from "../Logic/badgeCollectionHandler";
import backButton from "../../assets/no-bg/back-nobg.png";
import "./BadgeWindow.css";


// TODO: fix unique key prop problem

// Expected props:
// stats object - to pass to badgeCollector
const BadgeWindow = (props) => {
  const cancelHandler = () => {
    props.close(false);
  };

  // console.log(props.stats);
  // collect badges earned with biadgeCollector and require images context
  const badges = badgeCollector(props.stats);
  const images = require.context("../../assets/icons/badges", true);

  // populate JSX
  let badgesJSX = [];
  for (let attr in badges) {
    // Attribute header h2
    badgesJSX.push(
      <h2 key={attr} className="badgeAttrHead">
        {attr.toUpperCase()}
      </h2>
    );
    
    // Badges under header - inner loop through badges object
    let attrBadges = [];
    for (let badge of badges[attr]) {
      // logic to exclude targeting.png - by default included from badgeHandler -> badgeCollector
      if (badge[0] !== "./targeting.png") {
        // push badge img and title JSX
        attrBadges.push(
          <div className="badgeContainer">
            <img
              className="badgeImg"
              src={images(badge[0])}
              key={badge[0]}
              alt="badge"
            />
            <h6 key={badge[1]} className="badgesTitle">{badge[1].toUpperCase()}</h6>
          </div>
        );
      }
    }

    badgesJSX.push(
      <div className="attrBadgesContainer" key={attr + "BadgesContainer"}>
        {attrBadges}
      </div>
    );
  }

  return (
    <div className="badgeWindowCard">
      <>
        <button
          title="Return to main menu"
          className="backButtonFixed"
          onClick={cancelHandler}
        >
          <img className="backButtonImg" src={backButton} alt="rback button" />
        </button>
        {badgesJSX}
      </>
    </div>
  );
};

export default BadgeWindow;
