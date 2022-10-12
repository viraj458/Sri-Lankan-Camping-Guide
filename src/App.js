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
import Eventupcoming from "./pages/eventupcoming/Eventupcoming";
import Eventpast from "./pages/eventpast/Eventpast";
import CamperRegistration from "./pages/registration/camperRegistrarion/CamperRegistration";
import EventID from "./pages/eventid/EventID";




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
        <Route path="/list" element={<List/>}/>
        <Route path="/event_upcoming" element={<Eventupcoming/>}/>
        <Route path="/event_past" element={<Eventpast/>}/>
        <Route path="/camper_registration" element={<CamperRegistration/>}/>
        <Route path="/event_ID" element={<EventID/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;