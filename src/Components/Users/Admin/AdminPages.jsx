import AdminLayout from "./Layout/AdminLayout";
import Dashboard from "./pages/Dashboard";

export default function AdminPages() {
    return (
        <AdminLayout>
          <Dashboard/>
        </AdminLayout>
    );
}

// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// //Admin Pages
// import AdminTopBar from "./Layout/AdminTopBar";
// import Dashboard from "./Pages/Dashboard";

// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { ColorModeContext, useMode } from "./Constant/Theme";

// function AdminPages() {
//   const [theme, colorMode] = useMode();
//   const [isSidebar, setIsSidebar] = useState(true);

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <div className="app">
//           {/* <AdSidebar isSidebar={isSidebar} /> */}
//           <main className="content">
//             <AdminTopBar setIsSidebar={setIsSidebar} />
//             <Routes>
//               <Route path="/dashboard" element={<Dashboard />} />

// <Route path="/team" element={<Team />} />
// <Route path="/contacts" element={<Contacts />} />
// <Route path="/invoices" element={<Invoices />} />
// <Route path="/form" element={<Form />} />
// <Route path="/bar" element={<Bar />} />
// <Route path="/pie" element={<Pie />} />
// <Route path="/line" element={<Line />} />
// <Route path="/faq" element={<FAQ />} />
// <Route path="/calendar" element={<Calendar />} />
// <Route path="/geography" element={<Geography />} />

//             </Routes>
//           </main>
//         </div>
//       </ThemeProvider>
//     </ColorModeContext.Provider>
//   );
// }

// export default AdminPages;

// import "antd/dist/reset.css";
// // import { Menu } from "antd";
// import React from "react";
// import { Routes as Switch, Route } from "react-router-dom";
// import Dashboard from "./Pages/Dashboard";
// import Message from "./Pages/Message";
// import Member from "./Pages/Member";
// import AdminTopBar from "./Constant/AdminTopBar";
// import AdminSidebar from "./Constant/AdminSideBar";

// export default function AdminPages() {
//   return function App() {
//     return (
//       <>
//         <div className="flex h-screen">
//           <AdminSidebar />
//           <div className="flex-1">
//             <Switch>
//               <Route path="/admin/topbar" element={<AdminTopBar />} />
//               <Route path="/dashboard" exact component={Dashboard} />
//               <Route path="/message" component={Message} />
//               <Route path="/member" component={Member} />
//             </Switch>
//           </div>
//         </div>
//       </>
//     );
//   };

// <div className="">

//   {/* <Menu
//     items={[
//       { label: "Home" },
//       { label: "Message" },
//       { label: "Training" },
//     ]}></Menu>
//   <div> */}
//   <Content />
// </div>
// }

// function Content() {
//   return <div></div>;

// import Dashboard from "./Pages/Dashboard";
// import Message from "./Pages/Message";
// import Trainings from "./Pages/Trainings";
// import Member from "./Pages/Member";
// import Announcement from "./Pages/Announcement";
// import Report from "./Pages/Report";
// import Feedback from "./Pages/Feedback";

// import AdminNavBar from "./Constant/AdminNavBar";
// import AdminSideBar from "./Constant/AdminSideBar";

// import { Route, Routes } from "react-router-dom";

// export default function AdminPages() {
//   return (
//     <div>
//       <AdminNavBar />
//       <AdminSideBar />
//       {/* For NavBar */}
//       {/* <div className="shadow-lg h-16 shadow-slate-300 px-20 w-screen grid grid-cols-1"></div> */}
//       {/* for Sidebar */}
//       {/* <div className="w-screen h-screen grid grid-cols-8"></div> */}
//       <Content>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/message" element={<Message />} />
//           <Route path="/trainings" element={<Trainings />} />
//           <Route path="/member" element={<Member />} />
//           <Route path="/announcement" element={<Announcement />} />
//           <Route path="/report" element={<Report />} />
//           <Route path="/feedback" element={<Feedback />} />
//         </Routes>
//       </Content>
//     </div>
//   );
// }

// function Content() {
//   return <div></div>;
// }
