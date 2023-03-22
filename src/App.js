import "./App.css";
import Main from "./Components/Main";
import Login from "./Components/Auth/Login";
import Admin from './Components/Users/Admin';

import { Routes as Switch, Route } from "react-router-dom";
import Register from "./Components/Auth/Register";

function App() {
  return (
    <div>
      <Switch>
        <Route index element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/>
        <Route path="/Admin" element={<Admin />}/>
      </Switch>
    </div>
  );
}

export default App;
