 import "./header.css"; 
 
const Header = ({ type }) => {
  return (
    <div className="header">
      
      
        <div className="headerList">
          <div className="headerListItem">
           
            <span><b>Home</b></span>
          </div>
          <div className="headerListItem">
            
            <span><b>Gallery</b></span>
          </div>
          <div className="headerListItem">
            
            <span><b>Contact US</b></span>
          </div>
          <div className="headerListItem">
            
            <span><b>Help</b></span>
          </div>
          
        
        
      </div>
    </div>
  );
};

export default Header;
