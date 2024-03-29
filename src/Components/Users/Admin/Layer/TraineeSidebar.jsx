import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../Constant/Theme";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/FlipCameraAndroidOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import Logout from '@mui/icons-material/Logout';
import {BsArrowBarLeft,BsArrowBarRight} from 'react-icons/bs';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}>
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export default function TraineeSidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <Box
      className="h-screen"
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "2px 35px 2px 10px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}>
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <BsArrowBarRight /> : undefined}
            style={{
              margin: "0px 0 0px 0",
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mr="20px">
                <Typography variant="h3" color={colors.grey[100]}>
                  Trainee
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <BsArrowBarLeft />
                </IconButton>
              </Box>
            )}
          </MenuItem>

            
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex">
                  {" "}
                  <img
                    src="assets/logo.svg"
                    alt="Dan Training Center"
                    width="200px"
                    height="200px"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
              </Box>
            </Box>
          )}
       

          <Box paddingLeft={isCollapsed ? undefined : ""}>
            <Item
              title="Dashboard"
              to="/TraineeDashboard"
              icon={<DashboardCustomizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="My trainings"
              to="/TraineeTraining"
              icon={<MessageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Schedules"
              to="/TraineeSchedule"
              icon={<OndemandVideoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Assignment"
              to="/TraineeAssignment"
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Feedbacks"
              to="/TraineeFeedback"
              icon={<CampaignOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Asseessments & Placement"
              to="/TraineeAssessment"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Logout"
              to="/"
              icon={<Logout />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

// import { RxDashboard, RxChatBubble, RxDesktop } from "react-icons/rx";
// import { FaUsers, FaClipboardList } from "react-icons/fa";
// import { TfiAnnouncement } from "react-icons/tfi";
// import { VscFeedback } from "react-icons/vsc";
// import { FiLogOut } from "react-icons/fi";
// import AdminButton from "./AdminButton";
// import { Link } from "react-router-dom";

// export default function AdminSideBar() {
//   return (
//     <div className="w-screen h-screen grid grid-cols-8">
//       <div className="pt-0 w-full h-screen bg-[#742BDA] float-left relative">
//         <img
//           src="public/assets/Admin/DTCLogo.png"
//           alt="Dan"
//           className="md:w-4/5 lg:w-3/5 mx-auto my-4 "></img>
//         <Link to="/dashboard">
//           {" "}
//           <AdminButton
//             icon=<RxDashboard className="text-white w-8 h-8" />
//             name="Dashboard"
//           />
//         </Link>
//         <AdminButton
//           icon=<RxChatBubble className="text-white w-8 h-8" />
//           name="Message"
//         />
//         <AdminButton
//           icon=<RxDesktop className="text-white w-8 h-8" />
//           name="Training"
//         />
//         <AdminButton
//           icon=<FaUsers className="text-[#742BDA] w-8 h-8" />
//           name="Member"
//         />
//         <AdminButton
//           icon=<TfiAnnouncement className="text-white w-8 h-8" />
//           name="Announcement"
//         />
//         <AdminButton
//           icon=<FaClipboardList className="text-white w-8 h-8" />
//           name="Report"
//         />
//         <AdminButton
//           icon=<VscFeedback className="text-white w-8 h-8" />
//           name="Feedback"
//         />
//         <div className="h-2"></div>
//         <AdminButton icon=<FiLogOut className="text-white w-8 h-8" /> name="" />
//       </div>
//     </div>
//   );
// }
