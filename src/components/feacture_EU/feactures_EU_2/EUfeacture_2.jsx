import "../feactures_EU_1/EUfeacture.css";

import useFetch from "../../../hooks/useFetch";
import {Link } from "react-router-dom";
import React from 'react';

const EUfeacture2 = () => {

  const { data, loading, error } = useFetch(
    "https://sri-lankan-campig-guide-api.onrender.com/api/v1/events/eventbybeach?eventbeach=Beach",
   { method:"GET"
});
     console.log(data);
 
     return (
      <div className="fp">
        
        {loading ? (
          "loading"
        ) : (
          <>
         {data.map((item)=>(
        <div className="fpItem" key={item._id}>
          <img src={item.addphoto[0]} alt="" className="fpImg"/>
          <div className="fpdate">
          <span className="fpName">{item.event_name}</span><br/>
          <span>Date{item.starting_date}</span></div>
          <span className="fpCity">Venue :{item.event_location}</span><br/>
          
          <span className="fptime">Time :{item.starting_time}</span>
          <Link to={`/event/${item._id}`}><span className="view"><button>view</button></span></Link>
          
        </div>
          ))}
        </>
        )}  
      </div>
    );
  }

export default EUfeacture2;