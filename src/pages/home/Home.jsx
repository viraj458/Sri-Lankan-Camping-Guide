import Features from "../../components/Features_home/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MostVisitedSites from "../../components/MostVisitedSites/MostVisitedSites";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/Banner/Banner";

import "./home.css";


const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Header/>
      <Banner/>
      <div className="homeContainer">
        <h1 className="homeTitle">Features</h1>
        <Features/>
        <h1 className="homeTitle">Most Visited Sites</h1>
        <MostVisitedSites/> 
        <Footer/>
      </div> 
      
    </div>
  );
};

export default Home;