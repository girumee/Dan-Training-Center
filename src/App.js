import "./App.css";
//Landing Page
import Home from "./Components/Home/Home";

//Auth Pages
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import NewLogin from './Components/Auth/newLogin';

//Admin Page
import Dashboard from "./Components/Users/Admin/Pages/Dashboard";
import Message from "./Components/Users/Admin/Pages/Message";
import Trainings from "./Components/Users/Admin/Pages/Trainings";
import Members from "./Components/Users/Admin/Pages/Members";
import Announcement from "./Components/Users/Admin/Pages/Announcement";
import AdminSchedule from "./Components/Users/Admin/Pages/Schedule";
import Report from "./Components/Users/Admin/Pages/Report";
import Feedback from "./Components/Users/Admin/Pages/Feedback";
import MessageChat from "./Components/Users/Admin/Pages/MessageChat";

// import AdminLayout from "./Components/Users/Admin/Layout/AdminLayout";


import TraineeDashboard from "./Components/Users/Admin/Pages/Trainee/TraineeDashboard";
import TraineeTrainings from "./Components/Users/Admin/Pages/Trainee/TraineeTrainings";
import TraineeSchedule from "./Components/Users/Admin/Pages/Trainee/TraineeSchedule";
import TraineeAssignment from "./Components/Users/Admin/Pages/Trainee/TraineeAssignment";
import TraineeAssesment from "./Components/Users/Admin/Pages/Trainee/TraineeAssesment";
import TraineeFeedback from "./Components/Users/Admin/Pages/Trainee/TraineeFeedback";
import TraineeProfile from "./Components/Users/Admin/Pages/Trainee/TraineeProfile";

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
        <Route path="/newLogin" element={<NewLogin />} />

        {/* Admin Page Routes  */}

        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-message" element={<Message />} />
        <Route path="/admin-trainings" element={<Trainings />} />
        <Route path="/admin-members" element={<Members />} />
        <Route path="/admin-announcement" element={<Announcement />} />
        <Route path="/admin-schedule" element={<AdminSchedule />} />
        <Route path="/admin-report" element={<Report />} />
        <Route path="/admin-feedback" element={<Feedback />} />

        {/* Trainee Page Routes  */}  
          
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message" element={<Message />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/members" element={<Members />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/report" element={<Report />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/message/chat" element={<MessageChat />} />
        <Route path="/TraineeDashboard" element={<TraineeDashboard />} />
        <Route path="/TraineeTraining" element={<TraineeTrainings />} />
        <Route path="/TraineeSchedule" element={<TraineeSchedule />} />
        <Route path="/TraineeAssignment" element={<TraineeAssignment />} />
        <Route path="/TraineeFeedback" element={<TraineeAssesment />} />
        <Route path="/TraineeFeedback" element={<TraineeFeedback />} />
        <Route path="/TraineeProfile" element={<TraineeProfile />} />

      </Switch>
    </div>
  );
}

export default App;
