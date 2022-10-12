import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header"
import SearchItem from "../../components/SearchItems/SearchItem";
import DateSelector from "../../components/DateSelector/DateSelector";
import {useState} from 'react';

const List = () => {
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h2 className="lsTitle">Search</h2>
            <div className="lsItem">
              <label>Location</label>
              <input type="text" />
            </div>
            <div className="lsItem">
              <span onClick={()=>setOpenDate(!openDate)}>Search date</span>
            </div>
            {openDate && <DateSelector/>}
            

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