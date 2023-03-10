import "./style.module.css";

const Attribute = (props) => {
    const abilityType = props.type;

    // sort data for specific ability

    return (
    <div className={abilityType + ' '}>
        <img src={`.../images/${abilityType}.png`} alt={abilityType}/>
        <h1 className="abilityHeader">{abilityType.toUpperCase()}</h1>
        <div className="buttons">
                <button>Add</button>
                <button>View</button>
        </div>
    </div>
    )
}
 
export default Attribute;