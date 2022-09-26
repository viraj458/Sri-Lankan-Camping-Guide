import "./roleSelector.css";
import NavLogo from '../../components/navLogo/NavLogo';

const RoleSelector = () => {
  return (
    <div className="fullRoleContainer">
      <NavLogo/>
      <div className="roleContainer">
        <div className="container">
            <h1 style={{textAlign:"center"}}>Hello User</h1>
            <h1 style={{textAlign:"left"}}>Are you a,</h1>
            <div className="buttons1">
                <button className="navButton1">Camper</button>
                <button className="navButton1">Campsite Owner</button>
            </div>
        </div>
    </div>

    </div>
    
    
  )
}

export default RoleSelector