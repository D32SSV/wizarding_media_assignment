import LandingCalender from "./components/LandingCalender";
import MainCal from "./components/MainCal";
import AddMeeting from "./components/AddMeeting";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";
import ViewMeeting from "./components/ViewMeeting";
import MeetingCard from "./components/common/MeetingCard";
import AllMeetings from "./components/AllMeetings";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeUser name="Shaktiman" />
      <div className="flex items-center justify-around">
        {/* <LandingCalender /> */}
        {/* <AddMeeting /> */}
      </div>
      <AllMeetings />
    </>
  );
}

export default App;
