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
import Event_upcoming from "./pages/event_upcoming/event_upcoming";
import Event_past from "./pages/event_past/event_past";


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
        <Route path="/event_upcoming" element={<Event_upcoming/>}/>
        <Route path="/event_past" element={<Event_past/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;