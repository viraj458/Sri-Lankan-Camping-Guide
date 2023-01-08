
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import site4 from "./site4.jpg"
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import "./gallary.css";


const Gallary = () => {
  return (
    <div>
      <div></div>
      
      <Navbar/>
      <Header/>
      <Banner/>
      <div className="gallaryContainer">
        <h1 className="gallaryTitle">Features</h1>
        <div className="gaItem" >
        <img src={site4} alt="" className="gaImg"/>
        <div className="gadate">
        <span className="gaName">name</span><br/>
       
     
        
      </div>
       
    
     
    </div>
      
       
        <Footer/>
      </div> 
      
    </div>
  );
};

export default Gallary;

