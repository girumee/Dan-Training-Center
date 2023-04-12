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
        <div className="flex h-screen ">
          <div className="w-18 h-auto">
            <AdminSidebar isSidebar={isSidebar} />
          </div>
          <div className="w-full h-screen">
            <main className="w-full h-20">
              <AdminTopbar title={props.title} setIsSidebar={setIsSidebar} />
            </main>
            <main className="h-[calc(100%-80px)]">
              <div className="pt-3 h-full">{props.children}</div>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
