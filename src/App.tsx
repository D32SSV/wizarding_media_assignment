import LandingCalender from "./components/LandingCalender";
import MainCal from "./components/MainCal";
import AddMeeting from "./components/AddMeeting";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";
import ViewMeeting from "./components/ViewMeeting";
import AllMeetings from "./components/AllMeetings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <WelcomeUser />
      <div className="flex items-center justify-around">
        <Routes>
          <Route path="/" element={<LandingCalender />} />
          <Route path="/maincal" element={<MainCal />} />
          <Route path="/allmeetings" element={<AllMeetings />} />
          <Route path="/view" element={<ViewMeeting />} />
          <Route path="/create" element={<AddMeeting />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
