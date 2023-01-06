import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import SearchItem from "../../components/SearchItems/SearchItem";
// import DateSelector from "../../components/DateSelector/DateSelector";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

const List = () => {

  
  // const [openDate, setOpenDate] = useState(false)
  const [destination, setDestination] = useState('')

  const navigate = useNavigate()

  const handleSearch = () => {
    navigate('/', {state:destination})
  }
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
              placeholder="Location"
              onChange={e=>setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              {/* <span onClick={()=>setOpenDate(!openDate)}>Search date</span> */}
            </div>
            <div>
              <button onClick={handleSearch}>Search</button>
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