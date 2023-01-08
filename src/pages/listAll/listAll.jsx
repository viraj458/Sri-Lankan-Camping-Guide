import "./listAll.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import SearchItem from "../../components/SearchItems/SearchItem";
import {useState} from 'react';
// import { useLocation, useNavigate} from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ListAll = () => {

 
//   const location = useLocation();
//   const [destination, setDestination] = useState(location.state)

  const handleClick = () => {
    reFetch()
  }

  const {data, loading, error, reFetch} = useFetch("http://localhost:5000/api/v1/allcampsites")

  return (
    <div>
      <Navbar type='list'/>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          {/* <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" 
              className="searchbar"
              placeholder={destination}
              onChange={e=>setDestination(e.target.value)}
              />
            </div>
            <div>
              <button  className="sbtn" onClick={handleClick}><b>Search</b></button>
            </div>
            

          </div> */}
          <div className="listResult">
            {loading ? "Loading" : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
            ))}
            
            </>} 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListAll