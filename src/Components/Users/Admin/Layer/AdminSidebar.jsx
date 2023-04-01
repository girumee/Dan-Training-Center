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
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

export default function AdminSidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <Box
      className="h-screen "
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "2px 35px 2px 1px !important",
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
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "0px 0 0px 0",
              color: colors.grey[100],
            }}>
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" color={colors.grey[100]}>
                  Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <ArrowBackIosNewIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box>
            <img
              className="w-screen h-40"
              src="assets/logo.svg"
              alt="Dan Training Center"
              style={{ cursor: "pointer", borderRadius: "60%" }}
            />
          </Box>

          <Menu mr="20px" paddingLeft={isCollapsed ? undefined : ""}>
            <Item
              title="Dashboard"
              to="/admin-dashboard"
              icon={<DashboardCustomizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Message"
              to="/admin-message"
              icon={<MessageOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Trainings"
              to="/admin-trainings"
              icon={<OndemandVideoOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Members"
              to="/admin-members"
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Announcement"
              to="/admin-announcement"
              icon={<CampaignOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Schedule"
              to="/admin-schedule"
              icon={<CalendarMonthOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Report"
              to="/admin-report"
              icon={<ListAltOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Feedback"
              to="/admin-feedback"
              icon={<QuestionAnswerOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
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
