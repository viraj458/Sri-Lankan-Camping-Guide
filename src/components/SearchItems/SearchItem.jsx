import "./searchItem.css";
import site3 from "./site3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar} from "@fortawesome/free-solid-svg-icons";
import {Link } from "react-router-dom"; 

const SearchItem = ({item}) => {
  return (
    <div className="searchItem" key={item._id}>
      <img src={item.photos_of_location[0]} alt="" className="sItemImage" />
      <div className="sItemDiscription">
        <h3  className="sItemTitle">{item.campsite_name}</h3 >
        <span className="sItemDetails">{item.description}</span>
        <Link to={`/campsite/${item._id}`}><button className="sItemButton"><b>View</b></button></Link>
      </div>
      {/* <div className="sItemOther">
        <FontAwesomeIcon icon={faStar} />
        <div className="sItemRating">9.5</div>
      </div> */}
    </div>
  )
}

export default SearchItem