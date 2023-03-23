import Navbar from "./Navbar";
import Hero from "./Hero";
import Trainings from "./Training/Trainings";
import TrainerPage from "./Trainer/TrainerPage";
import ResAndChoose from "./ResultsAndChoosUS/ResAndChoose";
import App from "./Getintouch/App";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Dan";
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <Trainings />
      <TrainerPage />
      <ResAndChoose />
      <App />
    </div>
  );
}
