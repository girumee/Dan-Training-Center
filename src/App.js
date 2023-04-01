import "./App.css";
//Landing Page
import Home from "./Components/Home/Home";

//Auth Pages
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

//Admin Page
import Dashboard from "./Components/Users/Admin/Pages/Dashboard";
import Message from "./Components/Users/Admin/Pages/Message";
import Trainings from "./Components/Users/Admin/Pages/Trainings";
import Members from "./Components/Users/Admin/Pages/Members";
import Announcement from "./Components/Users/Admin/Pages/Announcement";
import AdminSchedule from "./Components/Users/Admin/Pages/Schedule";
import Report from "./Components/Users/Admin/Pages/Report";
import Feedback from "./Components/Users/Admin/Pages/Feedback";

// import AdminLayout from "./Components/Users/Admin/Layout/AdminLayout";

import { Routes as Switch, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        {/* Landing Page */}
        <Route index element={<Home />} />
        <Route
          path="/admin"
          element={<Navigate to="/admin-dashboard" replace />}
        />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Admin Page Routes  */}
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-message" element={<Message />} />
        <Route path="/admin-trainings" element={<Trainings />} />
        <Route path="/admin-members" element={<Members />} />
        <Route path="/admin-announcement" element={<Announcement />} />
        <Route path="/admin-schedule" element={<AdminSchedule />} />
        <Route path="/admin-report" element={<Report />} />
        <Route path="/admin-feedback" element={<Feedback />} />
      </Switch>
    </div>
  );
}

export default App;
