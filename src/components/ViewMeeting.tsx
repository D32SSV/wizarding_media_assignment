import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";
import Verticalbar from "./common/Verticalbar";

const ViewMeeting = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <Verticalbar decor={"B0E2E3"} />
        <div className="flex items-center shadow-md shadow-[#E1C9F7E0] rounded-sm font-jose px-4">
          <div className="flex flex-col  gap-4 w-max py-8 ">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div>
                <p>Title</p>
                <p>Travel Breif</p>
              </div>
              <div>
                <p>Title</p>
                <p>Travel Breif</p>
              </div>
              <div>
                <p>Title</p>
                <p>Travel Breif</p>
              </div>
              <div>
                <p>Title</p>
                <p>Travel Breif</p>
              </div>
            </div>
            <div>
              <p>Link</p>
              <p>
                link of teh meeting Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Voluptate
              </p>
            </div>
            <div>
              <p>Members</p>
              <p>Arun Tarun Muskan</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="inline-flex gap-1">
              <img src={edit} alt="edit button" />
              Edit
            </button>
            <button className="inline-flex gap-1">
              <img src={del} alt="delete button" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMeeting;
