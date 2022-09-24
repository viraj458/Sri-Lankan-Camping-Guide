import "./features.css";
import x from "./x.jpg";
import y from "./y.jpg";
import z from "./z.jpg";

const Features = () => {
  return (
    <div className="features">
      
        <>
          <div className="featuredItem">
            <img
              src={z}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Events</h1>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src={y}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Campsites</h1>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src={x}
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Guidelines</h1>
            </div>
          </div>
        </>
      
    </div>
  )
}

export default Features