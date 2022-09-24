import Featured from "../../components/featured_event/Featured";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event.css";
import React from "react";

const Event = () => {
  return (  
    <div>
        
        <Navbar />
        <Header />
        <Banner />
        <div className="eventContainer">
          <div className="eventcontent">
        <h1 className="eventTitle">Event Categories</h1>
          <Featured />
          </div>
          <Footer />
        </div>
        
    </div>
  );
};

export default Event;