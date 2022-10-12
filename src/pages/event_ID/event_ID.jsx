import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./event_ID.css";
import Feature_eventID from "../../components/feacture_EventID/feacture_EventID";



const Event_ID = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <Banner/>
      <div className="IDContainer">
        <Feature_eventID/>
        
           
        <Footer/>
      </div> 
    </div>
  );
};

export default Event_ID;