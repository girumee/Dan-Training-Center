import "./App.css";
import Main from "./Components/Main";

import { Routes as Switch, Route } from "react-router-dom";
import Hero from "./Components/Home/Hero";

function App() {
  return (
    <div>
      <Switch>
        <Route index element={<Main />} />
        <Route path="/hero" element={<Hero />} />
      </Switch>
    </div>
  );
}

export default App;
