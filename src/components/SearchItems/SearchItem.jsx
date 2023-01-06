import "./searchItem.css";
import site3 from "./site3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom"; 

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={site3} alt="" className="sItemImage" />
      <div className="sItemDiscription">
        <h3  className="sItemTitle">Eco Lodge Haputhale Camping </h3 >
        <span className="sItemDetails">Eco Lodge Haputhale Camping is set in Haputhale.A full English/Irish breakfast is avalable every morning at campsite.</span>
        <Link to="/campsites/:id"><button className="sItemButton"><b>View</b></button></Link>
      </div>
      <div className="sItemOther">
        <FontAwesomeIcon icon={faStar} />
        <div className="sItemRating">9.5</div>
      </div>
    </div>
  )
}

export default SearchItem