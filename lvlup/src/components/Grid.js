import './Grid.css';
import Attribute from "./Attribute/Attribute";
import ActivityMenu from "./ActivityMenu/ActivityMenu";
import StatsWindow from "./StatsWindow/StatsWindow";
import React, { useState } from "react";
import BadgeWindow from './BadgeWindow/BadgeWindow';


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
  // state for badgeWindow - uses bool
  const [badgeWindowOpen, setBadgeWindowOpen] = useState(false);

  // function for add button to pass to Attributes (opens acitivty menu)
  const addButtonClicked = (attribute) => {
    setMenuOpenAttribute(attribute);
  };
  // function for stats button to pass to Attributes (opens stats window)
  const statsButtonClicked = (attribute) => {
    setStatsWindowAttribute(attribute);
  };
  // function for badge to pass to Attributes (opens badge window)
  const badgeClicked = (bool) => {
    setBadgeWindowOpen(bool);
  }

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

  // badgeWindow open
  if (badgeWindowOpen) {
    menu = <BadgeWindow close={badgeClicked} stats={props.stats}/>
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
          badgeWindowOpen={badgeClicked}
          stats={props.stats.agility}
        />
        <Attribute
          className="intellect"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.intellect}
        />
        <Attribute
          className="strength"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.strength}
        />
        <Attribute
          className="skill"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.skill}
        />
        <Attribute
          className="attack"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.attack}
        />
        <Attribute
          className="presence"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.presence}
        />
        <Attribute
          className="alchemy"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.alchemy}
        />
        <Attribute
          className="power"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          badgeWindowOpen={badgeClicked}
          stats={props.stats.power}
        />
      </div>
    </>
  );
};

export default Grid;
