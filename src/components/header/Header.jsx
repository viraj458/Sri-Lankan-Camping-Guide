 import "./header.css";
 import {Link } from "react-router-dom"; 
 
const Header = ({ type }) => {
  return (
    <div className="header">
      
      
        <div className="headerList">
          <div className="headerListItem">
           
          <Link to="/"> <span><b>Home</b></span></Link>
          </div>
          <div className="headerListItem">
            
          <Link to="/Gallary"> <span><b>Gallery</b></span></Link>
          </div>
          <div className="headerListItem">
            
          <Link to="/Contactus"> <span><b>Contact US</b></span></Link>
          </div>
          <div className="headerListItem">
            
          
          </div>
          
        
        
      </div>
    </div>
  );
};

export default Header;
