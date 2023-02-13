import "./FeaturedSites.css"
import useFetch from "../../hooks/useFetch"
import { Link } from "react-router-dom" 


const FeaturedSites = () => {


  const { data, loading, error } = useFetch("https://sri-lankan-campig-guide-api.onrender.com/api/v1/campsites?featured=true");

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
              <Link to={`/campsite/${item._id}`}><button className="sItemButton"><b>View</b></button></Link>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default FeaturedSites