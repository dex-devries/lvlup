
import './BadgeTitle.css';

// Expected props:
// title string 
const BadgeTitle = (props) => {
  return <div className="badgeTitle">{props.title.toUpperCase()}</div>;
};

export default BadgeTitle;
