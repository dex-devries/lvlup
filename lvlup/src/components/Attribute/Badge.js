import "./Badge.css";

// Expected props:
// image object from require.context in badgeHandler.js
const Badge = (props) => {

  const badgeClickHandler = () => {
    console.log("clicked badge");
  }

  return (
    <div className="badge" onClick={badgeClickHandler}>
      <img className="badgeImg" src={props.image} alt="badge" />
    </div>
  );
};

export default Badge;
