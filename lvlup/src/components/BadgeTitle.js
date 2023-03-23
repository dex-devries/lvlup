
import './BadgeTitle.css';

const BadgeTitle = (props) => {
  return <div className="badgeTitle">{props.title.toUpperCase()}</div>;
};

export default BadgeTitle;
