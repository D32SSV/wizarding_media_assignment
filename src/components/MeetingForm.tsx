const MeetingForm = () => {
  return (
    <div className="p-8 flex flex-col items-start justify-center gap-4 shadow-md shadow-[#E1C9F7E0] rounded-[20px] font-jose w-2/6">
      <p className="text-2xl">Schedule New Meeting</p>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <input
          type="text"
          name=""
          id=""
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Title"
        />
        <select
          className="placeholder-[#A58FB9]  text-xl text-[#A58FB9] bg-[#F4F4F4] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          name=""
          id=""
        >
          <option value="" disabled selected className="text-xl text-[#A58FB9]">
            Type
          </option>
          <option value="Recurring" className="text-xl text-[#A58FB9]">
            Recurring
          </option>
          <option value="One Time" className="text-xl text-[#A58FB9]">
            One Time
          </option>
        </select>

        <input
          type="date"
          name=""
          id=""
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Date"
        />
        <input
          type="time"
          name=""
          id=""
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Time"
        />
        <input
          type="url"
          name=""
          id=""
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Link"
        />
        <input
          type="text"
          name=""
          id=""
          className="placeholder-[#A58FB9]  bg-[#F4F4F4] text-xl text-[#A58FB9] py-1 pl-6 h-10 w-full rounded-lg border-b-2 border-r-2 border-[#A58FB9]"
          placeholder="Members"
        />
      </div>
      <div className="flex items-start justify-around w-full gap-8">
        <button className="rounded-2xl font-bold text-xl px-8 py-2 shadow-lg shadow-[#A58FB9] border-b-2 border-r-2 border-[#E1C9F7]">
          Schedule
        </button>
        <button className="rounded-xl px-8 py-2 text-xl border-x-2 border-transparent hover:border-b-2 hover:border-r-2 hover:border-[#E1C9F7]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default MeetingForm;
