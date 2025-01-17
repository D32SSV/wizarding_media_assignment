import linkIcon from "../../assets/icons/link.svg";
import viewIcon from "../../assets/icons/view.svg";
import edit from "../../assets/icons/edit.svg";
import del from "../../assets/icons/delete.svg";
import Verticalbar from "./Verticalbar";

const MeetingCard = () => {
  return (
    <div className="flex">
      <Verticalbar decor={"B0E2E3"} />
      <div className="flex flex-col w-max h-max bg-white rounded-l-sm rounded-r-lg shadow-md shadow-[#E1C9F7] relative gap-8 px-4">
        <div className="divide-y-2 mt-8">
          <div className="pb-4 flex gap-4 px-4">
            <div className="">
              <p>Title</p>
              <p>Stand Up</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Date</p>
              <p className="text-md font-medium">Weekdays</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-md font-medium">10:30 AM</p>
            </div>
          </div>

          <div className="pb-4 px-4">
            <div className="flex items-center justify-between mt-4 text-sm ">
              <button className="flex items-center space-x-1 hover:underline font-jose">
                <img src={viewIcon} alt="" /> <span>View</span>
              </button>
              <button className="flex items-center space-x-1 hover:underline font-jose">
                <img src={edit} alt="" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-1 hover:underline font-jose">
                <img src={del} alt="delete" />

                <span>Delete</span>
              </button>
            </div>
          </div>
        </div>

        {/* Link Icon */}
        <div className="absolute top-2 right-2">
          <img src={linkIcon} alt="link" />
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
