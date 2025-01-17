import ScheduleMeeting from "./ScheduleMeeting";
import cal from "../assets/icons/cal.svg";
import { useNavigate } from "react-router-dom";
const LandingCalender = () => {
  const navigate = useNavigate();
  const currentDate = new Date();
  return (
    <div className="shadow-[#E1C9F7] shadow-lg w-max flex rounded-[20px] py-8 border px-16">
      <div className="flex gap-8">
        <div className="flex flex-col p-4">
          <div
            className="p-4 flex items-center justify-center flex-col hover:cursor-pointer"
            onClick={() => navigate("/maincal")}
          >
            <img src={cal} alt="" />
            <p className="font-jose text-xl">Upcoming</p>
          </div>
          <ScheduleMeeting />
        </div>
        <div className="w-1 h-full bg-gradient-to-t from-transparent to-[#F7CAC9] rounded-sm"></div>
      </div>
      <div className=" flex flex-col justify-start text-right px-3 gap-8">
        <div className="font-jose flex gap-8">
          <div>
            <p className="text-[#A58FB9] font-bold text-sm">Today</p>
            <p className="text-xl">
              {currentDate.getDate()}{" "}
              {currentDate.toLocaleString("default", { month: "long" })}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <div className="flex" key={index}>
                  <div
                    className={`w-1 h-full ${index % 2 === 0 ? "bg-[#B0E2E3]" : "bg-[#E1C9F7]"} rounded-sm`}
                  ></div>
                  <div className="text-left ml-1">
                    <p>New Year Special</p>
                    <p>Shoot</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="font-jose flex gap-8">
          <div>
            <p className="text-[#A58FB9] font-bold text-sm">Tomorrow</p>
            <p className="text-xl">
              {currentDate.getDate() + 1}{" "}
              {currentDate.toLocaleString("default", { month: "long" })}
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-8">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div className="flex" key={index}>
                  <div
                    className={`w-1 h-${index === 2 || index === 3 ? `0` : `full`} ${index % 2 === 0 ? "bg-[#B0E2E3]" : "bg-[#E1C9F7]"} rounded-sm ${index === 2 || index === 3 ? `bg-gradient-to-t from-transparent to-${index % 2 === 0 ? "bg-[#B0E2E3]" : "bg-[#E1C9F7]"}` : ""}`}
                  ></div>
                  <div className="text-left ml-1">
                    <p>New Year Special</p>
                    <p>Shoot</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCalender;
