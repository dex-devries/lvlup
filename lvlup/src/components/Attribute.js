import "./style.module.css";

const Attribute = (props) => {
    const abilityType = props.type;

    // sort data for specific ability

    return (
    <div className={abilityType + ' '}>
        <img src={require(`../assets/${abilityType}.png`)} alt={abilityType} style={{width:'40px'}}/>
        {/* <h1 className="abilityHeader" style={{color: 'white'}}>{abilityType.toUpperCase()}</h1> */}
        <div className="buttons">
                <button>Add</button>
                <button>View</button>
        </div>
    </div>
    )
}
 
export default Attribute;