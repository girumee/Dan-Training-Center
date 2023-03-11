import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" element={<Hero />} />
      </Switch>
    </div>
  );
}

export default Main;
