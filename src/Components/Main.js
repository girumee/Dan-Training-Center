import Navbar from "./Home/Navbar";
import Hero from "./Home/Hero";
import Trainings from "./Home/Trainings";

import { Routes as Switch, Route } from "react-router-dom";
import TrainerPage from "./Home/Trainer/TrainerPage";
import ResAndChoose from "./Home/ResultsAndChoosUS/ResAndChoose";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trainings />
      <TrainerPage />
      <ResAndChoose />
      {/* <Switch>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Trainings />} />
      </Switch> */}
      
    </div>
  );
}

export default Main;
