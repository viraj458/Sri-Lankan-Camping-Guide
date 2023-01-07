import "./Packages.css"
import site1 from "./site1.jpg"
import site2 from "./site2.jpg"
import site3 from "./site3.jpg"
import site4 from "./site4.jpg"
import {Link } from "react-router-dom"; 

const Packages = () => {
  return (
    <div className="cList">
      <div className="cListItem">
      <Link to="/campsites/:id"><img src={site1} alt="" className="cListImg"/></Link>
        <div className="cListTitles">
        <h1>Demo Campsite</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={site2} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Demo Campsite</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={site3} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Demo Campsite</h1>
      </div>
      </div>
      
      <div className="cListItem">
        <img src={site4} alt="" className="cListImg"/>
        <div className="cListTitles">
        <h1>Demo Campsite</h1>
      </div>
      </div>
      
    </div>
  )
}

export default Packages