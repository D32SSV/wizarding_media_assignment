import img from "../../src/assets/icons/meeting.png";
const ScheduleMeeting = () => {
  return (
    <div className="shadow-[#E1C9F7] shadow-lg flex flex-col justify-center items-center w-max rounded-[20px]">
      <img
        src={img}
        alt="schedule a meeting"
        className="px-4 py-6"
        height={120}
        width={120}
      />
      <div className="bg-[#F7CAC9] w-full h-2"></div>
      <p className="font-jose px-6 py-2 max-w-[158px] text-center">
        Schedule a Meeting
      </p>
    </div>
  );
};

export default ScheduleMeeting;
