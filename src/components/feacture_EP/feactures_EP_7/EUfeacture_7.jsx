import "./EUfeacture.css";
import beach from "./beach.png";

const EUfeacture7 = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <span className="view"><button>view</button></span>
        
      </div>

      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <span className="view"><button>view</button></span>
      </div>

      <div className="fpItem">
        <img src={beach} alt="" className="fpImg"/>
        <div className="fpdate">
        <span className="fpName">Name of the event</span>
        <button>Aug30</button></div>
        <span className="fpCity">Location</span>
        <span className="fptime">Date and Time</span>
        <span className="view"><button>view</button></span>
      </div>  
    </div>
  );
}

export default EUfeacture7;