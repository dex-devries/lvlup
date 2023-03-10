import "./styles.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logoHeader" src={require("../assets/logo2.jpg")} alt="Level up logo" style={{width: '330px'}}></img>
    </div>
  );
};

export default Header;
