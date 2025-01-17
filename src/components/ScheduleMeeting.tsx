import { useNavigate } from "react-router-dom";
import img from "../../src/assets/icons/meeting.png";
const ScheduleMeeting = () => {
  const navigate = useNavigate()
  return (
    <div
      className="shadow-[#E1C9F7] shadow-lg flex flex-col justify-center items-center w-max rounded-[20px] h-max hover:cursor-pointer"
      onClick={() => {navigate("/create")}}
    >
      <img
        src={img}
        alt="schedule a meeting"
        className="px-4 py-6"
        height={120}
        width={120}
      />
      <div className="bg-[#F7CAC9] w-full h-1"></div>
      <p className="font-jose px-6 py-2 max-w-[158px] text-center">
        Schedule a Meeting
      </p>
    </div>
  );
};

export default ScheduleMeeting;
