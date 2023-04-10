import "./ActivityDate.css";

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","NOV","DEC"];

const ActivityDate = (props) => {
  let dateSplit = props.date.split("-");

  const month = dateSplit[1];
  const day = dateSplit[2];
  const year = dateSplit[0];


  return (
    <span className="date-container">
      <div className="expense-date">
        <div className="expense-date__month">{MONTHS[parseInt(month)]}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
        
      </div>
    </span>
  );
};

export default ActivityDate;
