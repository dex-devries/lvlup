const AttributeXP = (props) => {
  // Expected props:
  // xp number
  return (
    <div className="attributeXP">
      XP: <div className="attributeData">{props.xp}</div>
    </div>
  );
};

export default AttributeXP;
