import './Attribute.css';

// Expected props: 
// level number
const AttributeLevel = (props) => {
  return (
    <div className="attributeLevel">
      Level: <div className='attributeData'>{props.level}</div>
    </div>
  );
};

export default AttributeLevel;
