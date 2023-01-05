import "./navbar.css"
import logo from "./logo.png";
import {Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <b>Sri Lankan<br/> Camping Guide</b></span>
          <img src={logo} className="appLogo" alt="logo"  />
        <div className="navItems">
        <Link to="/Roleselector"><button className="navButton"><b>Sign in</b></button></Link>
        <Link to="/RoleselectorReg"><button className="navButton"><b>Register</b></button></Link>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar