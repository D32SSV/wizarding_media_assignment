import { useLocation, useNavigate } from "react-router-dom";
import MeetingCard from "./common/MeetingCard";
import { Meeting } from "./ViewMeeting";

const AllMeetings = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const meetings = location.state?.meetings || [];
  console.log("MEETINGS>>>", meetings);

  return (
    <div className="font-jose mx-32 flex flex-col justify-between">
      <div className="flex items-center gap-12">
        <p>Meetings</p>
        <button
          onClick={() => {
            navigate("/create");
          }}
          className="px-8 py-2 shadow-md shadow-[#E1C9F7] rounded-2xl w-max border-b-2 border-r-2 border-[#E1C9F7]"
        >
          +Add New
        </button>
      </div>
      <div className="flex items-center gap-8 mt-8">
        <p className="text-lg">Upcoming</p>
        <div className="flex gap-16">
          <MeetingCard data={meetings[0]} />
          <MeetingCard data={meetings[0]} />
          <MeetingCard data={meetings[0]} />

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
          {meetings.map((meet: Meeting) =>
            meet.type === "Recurring" ? (
              <MeetingCard key={meet._id} data={meet} />
            ) : (
              <p>No recurring meetings yet</p>
            )
          )}
        </div>
      </div>
      <button className="px-8 py-2 ml-28 mt-8 shadow-md shadow-[#E1C9F7] rounded-2xl w-max border-b-2 border-r-2 border-[#E1C9F7]">
        View More
      </button>
    </div>
  );
};

export default AllMeetings;
