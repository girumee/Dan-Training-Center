import { useState } from "react";

//Admin Pages
import AdminTopbar from "./AdminTopbar";
//Admin Pages
import AdminSidebar from "./AdminSidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Constant/Theme";

export default function AdminLayout(props) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex h-screen">
          <div className="w-18 h-auto">
            <AdminSidebar isSidebar={isSidebar} />
          </div>
          <main className="w-full h-18">
            <AdminTopbar setIsSidebar={setIsSidebar} />
            <div>{props.children}</div>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
