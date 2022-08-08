import "./navbar.css";
import Logo from "../../assets/img/navbar-logo.svg";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../reducers/userReducer";

const Navbar = () => {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  return (
    <div className="navbar">
      <div className="container">
        <img src={Logo} alt="" className="navbar__logo" />
        <div className="navbar__header">
          <NavLink to={"/"}>CLOUD DRIVE</NavLink>
        </div>
        { !isAuth && <div className="navbar__login">
          <NavLink to={"/login"}>Login</NavLink>
        </div> }
        { !isAuth &&<div className="navbar__registration">
          <NavLink to={"/register"}>Registration</NavLink>
        </div> }
        {isAuth && <div className="navbar__login" onClick={() => dispatch(logout()) }>Logout</div> }
      </div>
    </div>
  );
};

export default Navbar;
