// import './style.module.css';
import Attribute from "./Attribute";
import ActivityMenu from "./ActivityMenu";
import StatsWindow from "./StatsWindow";
import React, { useState } from "react";

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

  // add menu open
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
    menu = <StatsWindow close={statsButtonClicked} attribute={statsWindowAttribute}/>;
    return menu;
  }

  return (
    <>
      {/* {menu} */}
      <div className="layout">
        <Attribute
          type="agility"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.agility}
        />
        <Attribute
          type="intellect"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.intellect}
        />
        <Attribute
          type="strength"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.strength}
        />
        <Attribute
          type="skill"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.skill}
        />
        <Attribute
          type="attack"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.attack}
        />
        <Attribute
          type="presence"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.presence}
        />
        <Attribute
          type="alchemy"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.alchemy}
        />
        <Attribute
          type="power"
          addMenuOpen={addButtonClicked}
          statsWindowOpen={statsButtonClicked}
          stats={props.stats.power}
        />
      </div>
    </>
  );

  //   <Attribute type='agility' data={props.data.agility}/>
  //   <Attribute type='intellect' data={props.data.intellect}/>
  //   <Attribute type='strength' data={props.data.strength}/>
  //   <Attribute type='skill' data={props.data.skill}/>
  //   <Attribute type='attack' data={props.data.attack}/>
  //   <Attribute type='presence' data={props.data.presence}/>
  //   <Attribute type='alchemy' data={props.data.alchemy}/>
  //   <Attribute type='power' data={props.data.power}/>
  //   </div>
};

export default Grid;
