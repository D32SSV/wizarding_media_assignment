import MeetingCard from "./common/MeetingCard";

const AllMeetings = () => {
  return (
    <div className="font-jose mx-32 flex flex-col justify-between">
      <div className="flex items-center gap-12">
        <p>Meetings</p>
        <button className="px-8 py-2 shadow-md shadow-[#E1C9F7] rounded-2xl w-max border-b-2 border-r-2 border-[#E1C9F7]">
          +Add New
        </button>
      </div>
      <div className="flex items-center gap-8 mt-8">
        <p className="text-lg">Upcoming</p>
        <div className="flex gap-16">
          <MeetingCard />
          <MeetingCard />
          <MeetingCard />
          {/* <MeetingCard />
      <MeetingCard />
      <MeetingCard /> */}
        </div>
      </div>
      <button className="px-8 py-2 ml-28 mt-8 shadow-md shadow-[#E1C9F7] rounded-2xl w-max border-b-2 border-r-2 border-[#E1C9F7]">
        View More
      </button>
      <div className="flex items-center gap-8 mt-8">
        <p className="text-lg">Recurring</p>
        <div className="flex gap-16">
          <MeetingCard />
          <MeetingCard />
          <MeetingCard />
          {/* <MeetingCard />
      <MeetingCard />
      <MeetingCard /> */}
        </div>
      </div>
      <button className="px-8 py-2 ml-28 mt-8 shadow-md shadow-[#E1C9F7] rounded-2xl w-max border-b-2 border-r-2 border-[#E1C9F7]">
        View More
      </button>
    </div>
  );
};

export default AllMeetings;
