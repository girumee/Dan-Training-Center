import "./App.css";
import Main from "./Components/Main";
import Login from "./Components/Auth/Login";

import { Routes as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route index element={<Main />} />
        <Route path="/Login" element={<Login />} />
      </Switch>
    </div>
  );
}

export default App;
