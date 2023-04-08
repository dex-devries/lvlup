import './Grid.css';
import Attribute from "./Attribute/Attribute";
import ActivityMenu from "./ActivityMenu/ActivityMenu";
import StatsWindow from "./StatsWindow/StatsWindow";
import React, { useState } from "react";

// Suggested modifications:
// ActivityMenu opens as modal

// Expected props:
// stats object - the object containing all attributes and current stats

// dataHandler(data) - the function for adding new activity(ies)  // - data can be one activity object or a list of them (minor mod in App.js addUserData())
// data object - the list of all activities - activitiesList in App.js - needed in StatsWindow
const Grid = (props) => {
  let menu = <></>;

  // console.log(props.stats);

  // state for activtyMenu
  // state here relies on the name of the attribute to open correct menu
  const [menuOpenAttribute, setMenuOpenAttribute] = useState(null);
  // state for statsWindow - same logic as menuOpenAttr... name of attr loads correct stats
  const [statsWindowAttribute, setStatsWindowAttribute] = useState(null);

  // function for add button to pass to Attributes (opens acitivty menu)
  const addButtonClicked = (attribute) => {
    setMenuOpenAttribute(attribute);
  };
  // function for stats button to pass to Attributes (opens stats window)
  const statsButtonClicked = (attribute) => {
    setStatsWindowAttribute(attribute);
  };

  // add menu open - menuOpenAttr != null , menuOpenAttr == attribute
  if (menuOpenAttribute) {
    menu = (
      <ActivityMenu
        attribute={menuOpenAttribute}
        menuClose={addButtonClicked}
        dataHandler={props.dataHandler}
      />
    );
    return menu;
  }

  // stats window open
  if (statsWindowAttribute) {
    menu = <StatsWindow close={statsButtonClicked} attribute={statsWindowAttribute} data={props.data}/>;
    return menu;
  }

  return (
    <>
      {/* {menu} */}
      <div className="layout">
        <Attribute
          className="agility"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.agility}
        />
        <Attribute
          className="intellect"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.intellect}
        />
        <Attribute
          className="strength"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.strength}
        />
        <Attribute
          className="skill"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.skill}
        />
        <Attribute
          className="attack"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.attack}
        />
        <Attribute
          className="presence"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.presence}
        />
        <Attribute
          className="alchemy"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.alchemy}
        />
        <Attribute
          className="power"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.power}
        />
      </div>
    </>
  );
};

export default Grid;
