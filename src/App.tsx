import LandingCalender from "./components/LandingCalender";
import MainCal from "./components/MainCal";
import AddMeeting from "./components/AddMeeting";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";
import ViewMeeting from "./components/ViewMeeting";
import AllMeetings from "./components/AllMeetings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/defaultPages/About";
import Notfound from "./components/defaultPages/notfound";
import Features from "./components/defaultPages/Features";
import Pricing from "./components/defaultPages/Pricing";
import Dashboard from "./components/defaultPages/Dashboard";
export const api = "http://localhost:4000"

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
          <Route path="/view/:id" element={<ViewMeeting />} />
          <Route path="/create" element={<AddMeeting />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
