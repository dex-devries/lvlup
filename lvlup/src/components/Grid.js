// import './style.module.css';
import Attribute from "./Attribute";
import ActivityMenu from "./ActivityMenu";
import React, { useState } from "react";

const Grid = (props) => {
  let menu = <></>;

  // state here relies on the name of the attribute to open correct menu
  const [menuOpenAttribute, setMenuOpenAttribute] = useState(null);

  // function to pass to Attributes
  const addButtonClicked = (attribute) => {
    setMenuOpenAttribute(attribute);
  };

  if (menuOpenAttribute) {
    menu = (
      <ActivityMenu
        attribute={menuOpenAttribute}
        menuClose={addButtonClicked}
      />
    );
  }

  return (
    <>
      {menu}
      <div className="layout">
        <Attribute type="agility" addMenuOpen={addButtonClicked} />
        <Attribute type="intellect" addMenuOpen={addButtonClicked} />
        <Attribute type="strength" addMenuOpen={addButtonClicked} />
        <Attribute type="skill" addMenuOpen={addButtonClicked} />
        <Attribute type="attack" addMenuOpen={addButtonClicked} />
        <Attribute type="presence" addMenuOpen={addButtonClicked} />
        <Attribute type="alchemy" addMenuOpen={addButtonClicked} />
        <Attribute type="power" addMenuOpen={addButtonClicked} />
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
