import { Link } from "react-router-dom";

import Announcement from "./Pages/Announcement";
import Dashboard from "./Pages/Dashboard";
import Feedback from "./Pages/Feedback";
import Member from "./Pages/Member";
import Message from "./Pages/Message";
import Report from "./Pages/Report";
import Trainings from "./Pages/Trainings";
import { RxDashboard, RxChatBubble, RxDesktop } from "react-icons/rx";
import { FaUsers, FaClipboardList } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { VscFeedback } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import AdminButton from "./Constant/AdminButton";

export default function Admin() {
  let Page;
  switch (window.location.pathname) {
    case "/admin":
      Page = Dashboard;
      break;
    case "/announcement":
      Page = Announcement;
      break;
    case "/feedback":
      Page = Feedback;
      break;
    case "/member":
      Page = Member;
      break;
    case "/message":
      Page = Message;
      break;
    case "/report":
      Page = Report;
      break;
    case "/trainings":
      Page = Trainings;
      break;
    default:
      Page = Dashboard;
  }

  console.log(Page.name);

  return (
    <div className="w-screen h-screen grid grid-cols-8">
      {/* side Bar */}
      <div className="w-full h-screen bg-[#742BDA] float-left relative">
        <img
          src="./assets/Admin/DTCLogo.png"
          alt="Dan"
          className="md:w-4/5 lg:w-3/5 mx-auto my-4 "></img>
        <Link to="/dashboard">
          <AdminButton
            icon=<RxDashboard
              className={
                Page.name === "Dashboard"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Dashboard"
            bg={Page.name === "Dashboard" ? "white" : "[#742BDA]"}
          />
        </Link>
        <Link to="/admin/message">
          <AdminButton
            icon=<RxChatBubble
              className={
                Page.name === "Message"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Message"
          />
        </Link>
        <Link to="/trainings">
          <AdminButton
            icon=<RxDesktop
              className={
                Page.name === "Training"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Training"
          />
        </Link>
        <Link to="/member">
          <AdminButton
            icon=<FaUsers
              className={
                Page.name === "Member"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Member"
          />
        </Link>
        <Link to="/admin/announcement">
          <AdminButton
            icon=<TfiAnnouncement
              className={
                Page.name === "Announcement"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Announcement"
          />
        </Link>
        <Link to="/report">
          <AdminButton
            icon=<FaClipboardList
              className={
                Page.name === "Report"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Report"
          />
        </Link>
        <Link to="/Feedback">
          <AdminButton
            icon=<VscFeedback
              className={
                Page.name === "Feedback"
                  ? "text-[#742BDA] w-8 h-8"
                  : "text-white w-8 h-8"
              }
            />
            name="Feedback"
          />
        </Link>
        <div className="h-2"></div>
        <AdminButton icon=<FiLogOut className="text-white w-8 h-8" /> name="" />
      </div>
      <Page />
    </div>
  );
}

//  {/* <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />}>
//           <Route index element={<Dashboard />} />
//           <Route path="Announcement" element={<Announcement />} />
//           <Route path="Feedback" element={<Feedback />} />
//           <Route path="Members" element={<Member />} />
//           <Route path="Message" element={<Message />} />
//           <Route path="Report" element={<Report />} />
//           <Route path="Training" element={<Training />} />
//         </Route>
//       </Routes>
//     </BrowserRouter> */}
