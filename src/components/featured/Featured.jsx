import "./featured.css";
import beach from "./beach.png";

const Featured = () => {
  return (
    <div>
    <div className="feature">
      <div className="featureItem">
        <img
          src={beach} alt="" className="featureImg"/>
        <div className="featureTitles">
          <h1>Beach Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>

      <div className="featureItem">
        <img
          src={beach}
          alt=""
          className="featureImg"
        />
        <div className="featureTitles">
          <h1>Beach Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>
      
      <div className="featureItem">
        <img
          src={beach}
          alt=""
          className="featureImg"
        />
        <div className="featureTitles">
          <h1>Jungle Camping</h1>
          <h2>533 events</h2>
        </div>
      </div>
      <div className="featureItem">
        <img
          src={beach}
          alt=""
          className="featureImg"
        />
        <div className="featureTitles">
          <h1>RiverSide Camping</h1>
          <h2>532 events</h2>
        </div>
      </div>
    </div>


      
<div className="feature1">
<div className="featureItem1">
  <img
    src={beach}
    alt=""
    className="featureImg1"
  />
  <div className="featureTitles1">
    <h1>Beach Camping</h1>
    <h2>123 events</h2>
  </div>
</div>

<div className="featureItem">
        <img
          src={beach}
          alt=""
          className="featureImg"
        />
        <div className="featureTitles">
          <h1>Beach Camping</h1>
          <h2>123 events</h2>
        </div>
      </div>

<div className="featureItem1">
  <img
    src={beach}
    alt=""
    className="featureImg1"
  />
  <div className="featureTitles1">
    <h1>Jungle Camping</h1>
    <h2>533 events</h2>
  </div>
</div>
<div className="featureItem1">
  <img
    src={beach}
    alt=""
    className="featureImg1"
  />
  <div className="featureTitles1">
    <h1>RiverSide Camping</h1>
    <h2>532 events</h2>
  </div>
</div>
</div>
</div>
    
  );
};

export default Featured;
