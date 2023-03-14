import "./styles.css";
import AttributeLevel from "./AttributeLevel";
import AttributeXP from "./AttributeXP";

const Attribute = (props) => {
  // console.log(props);
  const xp = props.stats.xp;
  const level = props.stats.level;
  const abilityType = props.type;
  // const xp = props.stats.xp;
  // const level = props.stats.level;

  // sort data for specific ability

  // handler for add button clicked (opens add menu)
  const addClickHandler = (e) => {
    props.addMenuOpen(abilityType);
  };

  return (
    <div className={abilityType}>
      <img
        className="abilityImage"
        src={require(`../assets/${abilityType}.png`)}
        alt={abilityType}
      />
      <h1 className="abilityHeader" style={{ color: "white" }}>
        {abilityType.toUpperCase()}
      </h1>
      <div className="attributeStats">
        <AttributeLevel level={level}/>
        <AttributeXP xp={xp}/>
      </div>
      <div className="badge">
        <img className="badgeImg" src={require('../assets/icons/targeting.png')} alt="badge"/>
      </div>
      <div className="buttons">
        <button title='Add activity' className="addButton" onClick={addClickHandler}>
          <img
            className="addThumb"
            src={require("../assets/add-sm.png")}
            alt="add button"
          />
        </button>
        <button title='View stats' className="statsButton">
          <img
            className="statsThumb"
            src={require("../assets/stats-neg-removebg.png")}
            alt="stats button"
          />
        </button>
        <div className="badgeTitle">
            {'TARGET ACQUIRED'}
        </div>
      </div>
    </div>
  );
};

export default Attribute;
