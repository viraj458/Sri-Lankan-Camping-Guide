import "./roleSelectorReg.css";
import NavLogo from '../../components/navLogo/NavLogo';

const RoleSelectorReg = () => {
  return (
    <div className="fullRoleContainer">
      <NavLogo/>
      <div className="roleContainer">
        <div className="container">
            <h1 style={{textAlign:"center"}}>Hello User</h1>
            <h1 style={{textAlign:"left"}}>Are you a,</h1>
            <div className="buttons1">
                <button className="navButton1">Register Camper</button>
                <button className="navButton1">Register Campsite</button>
            </div>
        </div>
    </div>

    </div>
    
    
  )
}

export default RoleSelectorReg