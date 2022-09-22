import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        
      <div className="fLists">
        <div className="fList">

        <div className="ftitle"><h3 >About us</h3></div>
          
          <p>We have all information for camping such </p> 
          <p>camping guide, hotels, locations etc.</p>
          <p>to satisfy your camping experience.</p>
            
        </div>

        <div className="fList">
        
        <div className="ftitle"><h3 >Main menu</h3></div>
        
          <ul className="fList">
              <li className="fListItem">Home </li>
              <li className="fListItem">Galery </li>
              <li className="fListItem">Contact us </li>
              
            </ul>
        </div>  
        <div className="fList">

        <div className="ftitle"><h3 >Quick links</h3></div>  
        
          <ul className="fList">
              <li className="fListItem">Camping sites </li>
              <li className="fListItem">Events</li>
              <li className="fListItem">Tips </li>
              <li className="fListItem">Camping regulations </li>
            </ul>
        </div>
        <div className="fList">

        <div className="ftitle"><h3 >Contact us</h3></div>  
        
          <ul className="fList">
              <li className="fListItem">slcampingguide@gmail.com </li>
              <li className="fListItem">+94778691322</li>
              <li className="fListItem">+94771565695 </li>
            </ul>
        </div>
            
      </div>
      
      
      <div className="fText">Copyright © 2022 Sri Lankan Camping Guide.</div>
    </div>
  );
};

export default Footer;
