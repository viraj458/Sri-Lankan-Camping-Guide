import "./navbar.css"
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <b>Sri Lankan<br/> Camping Guide</b></span>
          <img src={logo} className="appLogo" alt="logo"  />
        <div className="navItems">
          <button className="navButton"><b>Sign in</b></button>
          <button className="navButton"><b>Register</b></button>
        </div>
      </div>
    </div>
    
  )
}

export default Navbar