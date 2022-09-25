import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Campsite from "./pages/campsite/Campsite";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Event from "./pages/event/Event";
import OwnerRegistrationForm from "./pages/registration/campsiteOwnerReg/OwnerRegistrationForm"
import RoleSelector from "./pages/roleSelector/RoleSelector";
import CampsiteRegistration from "./pages/campsiteRegistration/CampsiteRegistration";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campsites" element={<List/>}/>
        <Route path="/campsites/:id" element={<Campsite/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/registration" element={<OwnerRegistrationForm/>}/>
        <Route path="/roleselector" element={<RoleSelector/>}/>
        <Route path="/campsiteregistration" element={<CampsiteRegistration/>}/>
        <Route path="/list" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;