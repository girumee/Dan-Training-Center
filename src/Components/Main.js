import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Trainings from "./Home/Training/Trainings";

import { Routes as Switch, Route } from "react-router-dom";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trainings />
      {/* <Switch>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Trainings />} />
      </Switch> */}
    </div>
  );
}

export default Main;
