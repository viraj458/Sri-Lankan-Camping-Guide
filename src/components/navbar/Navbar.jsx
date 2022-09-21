import "./navbar.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const registerPage = () => {
    navigate("/registration")
  }
  const loginPage = () => {
    navigate("/login")
  }

  const returnHome = () => {
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="logo">
          <img src={logo} className="appLogo" alt="logo" onClick={ returnHome } />
          <h5>Sri Lankan Camping  Guide</h5>
        </div>
        {user ? user.username : (
        <div className="navItems">
          <button className="navButton" onClick={ registerPage }>Register</button>
          <button className="navButton" onClick={ loginPage }>Login</button>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
