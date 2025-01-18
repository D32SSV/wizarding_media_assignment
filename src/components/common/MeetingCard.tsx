import linkIcon from "../../assets/icons/link.svg";
import viewIcon from "../../assets/icons/view.svg";
import edit from "../../assets/icons/edit.svg";
import del from "../../assets/icons/delete.svg";
import Verticalbar from "./Verticalbar";
import { Meeting } from "../ViewMeeting";
import { useNavigate } from "react-router-dom";

interface MeetingCardProps {
  data: Meeting;
}
const MeetingCard = ({ data }: MeetingCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <Verticalbar decor={"B0E2E3"} />
      <div className="flex flex-col w-max h-max bg-white rounded-l-sm rounded-r-lg shadow-md shadow-[#E1C9F7] relative gap-8 px-4">
        <div className="divide-y-2 mt-8">
          <div className="pb-4 flex gap-4 px-4">
            <div className="">
              <p>Title</p>
              <p>{data.title}</p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Date</p>
              <p className="text-md font-medium">
                {new Date(data.date).toLocaleDateString("en-US")}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500">Time</p>
              <p className="text-md font-medium">{data.time}</p>
            </div>
          </div>

          <div
            onClick={() => navigate(`/view/${data._id}`)}
            className="pb-4 px-4"
          >
            <div className="flex items-center justify-between mt-4 text-sm ">
              <button className="flex items-center space-x-1 hover:underline font-jose">
                <img src={viewIcon} alt="view details" /> <span>View</span>
              </button>
              <button className="flex items-center space-x-1 hover:underline font-jose">
                <img src={edit} alt="edit" />
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
        <div
          onClick={() => {
            navigator.clipboard.writeText(data.meetingLink);
            alert(`Meeting link copied ${data.meetingLink}`);
          }}
          className="absolute top-2 right-2 hover:cursor-pointer"
        >
          <img src={linkIcon} alt="link" />
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
