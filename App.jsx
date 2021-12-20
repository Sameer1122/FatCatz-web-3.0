import AutoPlay from "./Components/AutoPlay.jsx";
import { useEffect } from "react";
import Benifets from "./Components/Benifets.jsx";
import Faq from "./Components/Faq.jsx";
import Footer from "./Components/Footer.jsx";
import Header from "./Components/Header.jsx";
import Mission from "./Components/Mission.jsx";
import NavBar from "./Components/NavBar.jsx";
import Specs from "./Components/Specs.jsx";
import Team from "./Components/Team.jsx";
import CountDown from "./Components/CountDown.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import RoadMap from "./Components/RoadMap.jsx";
import AutoSlide from "./Components/AutoSlide.jsx";
function App() {
  useEffect(() => {
    Aos.init({ duration: 500, startEvent: "load" });
  }, []);
  return (
    <>
      <NavBar />
      <Header />
      <AutoPlay />
      {/* <CountDown /> */}
      <Mission />
      <RoadMap />
      <AutoSlide />
      <Specs />
      <Team />
      <Benifets />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
