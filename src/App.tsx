import LandingCalender from "./components/LandingCalender";
import MainCal from "./components/MainCal";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeUser name="Shaktiman" />
      <div className="flex items-center justify-around">
        {/* <LandingCalender /> */}
        <MainCal />
      </div>
    </>
  );
}

export default App;
