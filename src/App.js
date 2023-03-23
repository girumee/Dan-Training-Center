import "./App.css";
//Landing Page
import Home from "./Components/Home/Home";

//Auth Pages
import Login from "./Components/Auth/Login";

//Admin Page
import Dashboard from "./Components/Users/Admin/Pages/Dashboard";
import Message from "./Components/Users/Admin/Pages/Message";
import Trainings from "./Components/Users/Admin/Pages/Trainings";
import Members from "./Components/Users/Admin/Pages/Members";
import Announcement from "./Components/Users/Admin/Pages/Announcement";
import Calendar from "./Components/Users/Admin/Pages/Calender";
import Report from "./Components/Users/Admin/Pages/Report";
import Feedback from "./Components/Users/Admin/Pages/Feedback";

// import AdminLayout from "./Components/Users/Admin/Layout/AdminLayout";

import { Routes as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* Landing Page */}
        <Route index element={<Home />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />

        {/* Admin Page Routes  */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/members" element={<Members />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/report" element={<Report />} />
        <Route path="/feedback" element={<Feedback />} />
      </Switch>
    </div>
  );
}

export default App;
