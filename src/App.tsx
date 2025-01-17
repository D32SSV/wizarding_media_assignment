import LandingCalender from "./components/LandingCalender";
import MainCal from "./components/MainCal";
import AddMeeting from "./components/AddMeeting";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";
import ViewMeeting from "./components/ViewMeeting";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeUser name="Shaktiman" />
      <div className="flex items-center justify-around">
        {/* <LandingCalender /> */}
        {/* <MainCal /> */}
      </div>
        <ViewMeeting />
    </>
  );
}

export default App;
