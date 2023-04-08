import "./Header.css";
import logo from "../../assets/logo3.jpg";

const Header = () => {
  return (
    <div className="header">
      <img className="logoHeader" src={logo} alt="Level up logo"></img>
    </div>
  );
};

export default Header;
