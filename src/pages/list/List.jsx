import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import SearchItem from "../../components/SearchItems/SearchItem";
import {useState} from 'react';
import { useLocation} from "react-router-dom";

const List = () => {


  const location = useLocation();
  const [destination, setDestination] = useState(location.state)

  return (
    <div>
      <Navbar type='list'/>
      <Header />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" 
              className="searchbar"
              placeholder={destination}
              />
            </div>
            <div className="lsItem">
              {/* <span onClick={()=>setOpenDate(!openDate)}>Search date</span> */}
            </div>
            <div>
              <button className="sbtn"><b>Search</b></button>
            </div>
            {/* {openDate && <DateSelector/>} */}
            

          </div>
          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List