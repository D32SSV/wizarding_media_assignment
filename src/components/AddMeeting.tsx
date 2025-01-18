import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../App"; 

const AddMeeting = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [meetingType, setMeetingType] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [members, setMembers] = useState<string[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async () => {
    if (!title || !meetingType || !date || !time || !link || !members) {
      setError("All fields are mandatory");
      return;
    }
    setError("");
    setLoading(true);
    const data = {
      title,
      type: meetingType,
      date,
      time,
      meetingLink: link,
      members,
    };
    // console.log("DATA BEFORE POSTING>>>>", data);

    try {
      const response = await fetch(`${api}/createmeeting`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to schedule meeting");
      }
      setTitle("");
      setDate("");
      setLink("");
      setMeetingType("");
      setMembers([]);
      setTime("");
      alert("Meeting scheduled successfully");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 flex flex-col items-start justify-center gap-4 shadow-md shadow-[#E1C9F7E0] rounded-[20px] font-jose w-2/6">
      <p className="text-2xl">Schedule New Meeting</p>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Title"
        />
        <select
          value={meetingType}
          onChange={(e) => setMeetingType(e.target.value)}
          className="placeholder-[#A58FB9]  text-xl text-[#A58FB9] bg-[#F4F4F4] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
        >
          <option value="" disabled>
            Type
          </option>
          <option value="Recurring">Recurring</option>
          <option value="One Time">One Time</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Date"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Time"
        />
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Link"
        />
        <input
          type="text"
          value={members}
          onChange={(e) => setMembers(e.target.value.split(","))}
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Members"
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex items-start justify-around w-full gap-8">
        <button
          onClick={handleSubmit}
          className="rounded-2xl font-bold text-xl px-8 py-2 shadow-lg shadow-[#A58FB9] border-b-2 border-r-2 border-[#E1C9F7]"
          disabled={loading}
        >
          {loading ? "Please Wait..." : "Schedule"}
        </button>
        <button
          onClick={() => {
            navigate("/maincal");
          }}
          className="rounded-xl px-8 py-2 text-xl border-x-2 border-transparent hover:border-b-2 hover:border-r-2 hover:border-[#E1C9F7]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddMeeting;
