import "./ActivityDate.css";

const ActivityDate = (props) => {
  let dateSplit = props.date.split("-");

  const month = dateSplit[1];
  const day = dateSplit[2];
  const year = dateSplit[0];

  return (
    <div className="date-container">
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

export default ActivityDate;
