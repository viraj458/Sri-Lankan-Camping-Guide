import "./EUfeacture.css";
import beach from "./beach.png";
import {Link } from "react-router-dom";

const EUfeacture = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <Link to="/event/:id"><span className="view"><button>view</button></span></Link>
        
      </div>

      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <Link to="/event/:id"> <span className="view"><button>view</button></span></Link>
      </div>

      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <Link to="/event/:id"> <span className="view"><button>view</button></span></Link>
      </div>  
    </div>
  );
}

export default EUfeacture;