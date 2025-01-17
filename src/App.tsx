import LandingCalender from "./components/LandingCalender";
import Navbar from "./components/Navbar";
import WelcomeUser from "./components/WelcomeUser";

function App() {
  return (
    <>
      <Navbar />
      <WelcomeUser name="Shaktiman" />
      <div className="flex items-center justify-around">
        <LandingCalender />
      </div>
    </>
  );
}

export default App;
