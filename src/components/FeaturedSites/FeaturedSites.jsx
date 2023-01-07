import "./FeaturedSites.css"
import site1 from "./site1.jpg"
import site2 from "./site2.jpg"
import site3 from "./site3.jpg"
import site4 from "./site4.jpg"
import {Link } from "react-router-dom"; 
import useFetch from "../../hooks/useFetch"

const FeaturedSites = () => {


  const { data, loading, error } = useFetch("http://localhost:5000/api/v1//campsites?featured=true&limit=4");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={item.photos_of_location[1]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.campsite_name}</span>
              <span className="fpCity">{item.nearest_city}</span>
              {/* {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>} */}
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FeaturedSites