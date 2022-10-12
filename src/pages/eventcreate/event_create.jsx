import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event_create.css";


const Create_event = () => {
    return (
      <div>
        <Navbar />
        <Header/>
        <Banner/>
        <div className="homeContainer">
          <h1 className="homeTitle">Create Event</h1>
          <Features/>
          <h1 className="homeTitle">Most Visited Sites</h1>
          <MostVisitedSites/>
          <Footer/>
        </div> 
      </div>
    );
  };
  
  export default Create_event;