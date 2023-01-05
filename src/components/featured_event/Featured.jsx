import "./featured.css";
import beach from "./beach.png";
import {Link } from "react-router-dom";


const Featured = () => {
  return (
    <div>
    <div className="feature">
      <div className="featureItem">
      <Link to="/event_upcoming">  <img
          src={beach} alt="" className="featureImg"/></Link>
        <div className="featureTitles">
          <h1>Adventure Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>

      <div className="featureItem">
      <Link to="/event_upcoming"><img
          src={beach}
          alt=""
          className="featureImg"
        /></Link>
        <div className="featureTitles">
          <h1>Beach Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>
      
      <div className="featureItem">
      <Link to="/event_upcoming"> <img
          src={beach}
          alt=""
          className="featureImg"
        /></Link>
        <div className="featureTitles">
          <h1>Jungle Camping</h1>
          <h2>533 events</h2>
        </div>
      </div>
      
    </div>


      
<div className="feature1">
<div className="featureItem1">
<Link to="/event_upcoming"> <img
    src={beach}
    alt=""
    className="featureImg1"
  /></Link>
  <div className="featureTitles1">
    <h1>Luxury Camping</h1>
    <h2>123 events</h2>
  </div>
</div>

<div className="featureItem">
<Link to="/event_upcoming"> <img
          src={beach}
          alt=""
          className="featureImg"
        /></Link>
        <div className="featureTitles">
          <h1>River Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>

<div className="featureItem1">
<Link to="/event_upcoming"> <img
    src={beach}
    alt=""
    className="featureImg1"
  /></Link>
  <div className="featureTitles1">
    <h1>BirdWatching Camping</h1>
    <h2>533 events</h2>
  </div>
</div>

</div>
</div>
    
  );
};

export default Featured;
