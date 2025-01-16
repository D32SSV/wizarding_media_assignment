import Navbar from "./components/Navbar";
import ScheduleMeeting from "./components/ScheduleMeeting";
import WelcomeUser from "./components/WelcomeUser";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeUser name="Shaktiman" />
      <ScheduleMeeting />
    </>
  );
}

export default App;
