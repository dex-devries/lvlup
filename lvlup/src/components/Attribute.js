import "./styles.css";
import AttributeLevel from "./AttributeLevel";
import AttributeXP from "./AttributeXP";

const Attribute = (props) => {
    const abilityType = props.type;

    // sort data for specific ability

    return (
    <div className={abilityType}>
        <img className="abilityImage" src={require(`../assets/${abilityType}.png`)} alt={abilityType}/>
        <h1 className="abilityHeader" style={{color: 'white'}}>{abilityType.toUpperCase()}</h1>
        <div className="attributeStats">
            <AttributeLevel/>
            <AttributeXP/>
        </div>
        <div className="buttons">
                <button className='addButton'>Add</button>
                <button className='viewButton'>View</button>
        </div>
    </div>
    )
}
 
export default Attribute;