import Navbar from "./Home/NavBar";
import Hero from "./Home/Hero";
import Trainings from "./Home/Training/Trainings";
import TrainerPage from "./Home/Trainer/TrainerPage";
import ResAndChoose from "./Home/ResultsAndChoosUS/ResAndChoose";
import App from "./Home/Getintouch/App";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trainings />
      <TrainerPage />
      <ResAndChoose />
      <App />
      {/* <Switch>
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<Trainings />} />
      </Switch> */}
    </div>
  );
}

export default Main;
