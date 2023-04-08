import "./Attribute.css";
import AttributeLevel from "./AttributeLevel";
import AttributeXP from "./AttributeXP";
import Badge from "./Badge";
import BadgeTitle from "./BadgeTitle";
import { badgeHandler } from "./badgeHandler";

// Expected Props:
// stats object for attribute with xp and level
// className string for attribute/ability identifier
const Attribute = (props) => {
  // console.log(props);
  const xp = props.stats.xp;
  const level = props.stats.level;
  const abilityType = props.className;
  // const xp = props.stats.xp;
  // const level = props.stats.level;

  // handler for add button clicked (opens add menu)
  const addClickHandler = (e) => {
    props.addMenuOpen(abilityType);
  };

  // handler for stats button clicked
  const statsClickHandler = () => {
    props.statsWindowOpen(abilityType);
  }

  // handle badge/award logic
  // badgeHandler returns [badgeImg, badgeTitle]
  const badgeSrc = badgeHandler(level, abilityType);
  const badgeImg = badgeSrc[0];
  const badgeTitle = badgeSrc[1];

  // this logic creates the JSX for buttons (different for power attr, no add button)
  const addButton = <button title='Add activity' className="addButton" onClick={addClickHandler}>
  <img
    className="addThumb"
    src={require("../../assets/add-sm.png")}
    alt="add button"
  />
  </button>;

  return (
    <div>
      <img
        className="abilityImage"
        src={require(`../../assets/no-bg/${abilityType}.png`)}
        alt={abilityType}
      />
      <h1 className="abilityHeader" style={{ color: "white" }}>
        {abilityType.toUpperCase()}
      </h1>
      <div className="attributeStats">
        <AttributeLevel level={level}/>
        <AttributeXP xp={xp}/>
      </div>
      <Badge image={badgeImg}/>
      <div className="attrFoot">
        {/* Conditional for add button (no add button on power attr) */}
        {abilityType === "power" ? <div/> : addButton}
        <button title='View stats' className="statsButton" onClick={statsClickHandler}>
          <img
            className="statsThumb"
            src={require("../../assets/stats-neg-removebg.png")}
            alt="stats button"
          />
        </button>
        <BadgeTitle title={badgeTitle} />
      </div>
    </div>
  );
};

export default Attribute;
