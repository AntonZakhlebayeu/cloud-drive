import "./navbar.css";
import Logo from "../../assets/img/navbar-logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="" className="navbar__logo" />
        <div className="navbar__header">
          <NavLink to={"/"}>CLOUD DRIVE</NavLink>
        </div>
        <div className="navbar__login">
          <NavLink to={"/login"}>Login</NavLink>
        </div>
        <div className="navbar__registration">
          <NavLink to={"/register"}>Registration</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
