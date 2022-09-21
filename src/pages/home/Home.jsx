
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";


const Home = () => {
  return (
    <div>
      <div className="top">
        <Navbar />
        <Header/>
      </div>
      <div className="middle">
        <br />
      </div>
      <div className="bottom">
        <Footer/>
      </div>
      
    </div>
  );
};

export default Home;