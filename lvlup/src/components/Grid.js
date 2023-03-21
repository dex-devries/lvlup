// import './style.module.css';
import Attribute from "./Attribute";
import ActivityMenu from "./ActivityMenu";
import React, { useState } from "react";

const Grid = (props) => {
  let menu = <></>;

  // console.log(props.stats);

  // state here relies on the name of the attribute to open correct menu
  const [menuOpenAttribute, setMenuOpenAttribute] = useState(null);

  // function to pass to Attributes
  const addButtonClicked = (attribute) => {
    setMenuOpenAttribute(attribute);
  };

  // function to retrieve data

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

  return (
    <>
      {/* {menu} */}
      <div className="layout">
        <Attribute type="agility" addMenuOpen={addButtonClicked} stats={props.stats.agility}/>
        <Attribute type="intellect" addMenuOpen={addButtonClicked} stats={props.stats.intellect}/>
        <Attribute type="strength" addMenuOpen={addButtonClicked} stats={props.stats.strength}/>
        <Attribute type="skill" addMenuOpen={addButtonClicked} stats={props.stats.skill}/>
        <Attribute type="attack" addMenuOpen={addButtonClicked} stats={props.stats.attack}/>
        <Attribute type="presence" addMenuOpen={addButtonClicked} stats={props.stats.presence}/>
        <Attribute type="alchemy" addMenuOpen={addButtonClicked} stats={props.stats.alchemy}/>
        <Attribute type="power" addMenuOpen={addButtonClicked} stats={props.stats.power}/>
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
