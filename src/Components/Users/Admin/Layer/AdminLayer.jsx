import { useState } from "react";
//Admin Pages
import AdminTopbar from "./AdminTopbar";
//Admin Pages
import AdminSidebar from "./AdminSidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../Constant/Theme";

export default function AdminLayer(props) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="flex justify-between">
          <AdminSidebar isSidebar={isSidebar} />
          <main className="w-full">
            <AdminTopbar setIsSidebar={setIsSidebar} />
            {props.children}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
