import "./header.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


const Header = ({ type }) => {

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem">
            <span>Home</span>
          </div>
          <div className="headerListItem">
            <span>Galary</span>
          </div>
          <div className="headerListItem">
            <span>Contact us</span>
          </div>
          <div className="headerListItem">
            <span>Help</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;