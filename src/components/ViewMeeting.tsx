import edit from "../assets/icons/edit.svg";
import del from "../assets/icons/delete.svg";
import Verticalbar from "./common/Verticalbar";
import { useEffect, useState } from "react";
import { api } from "../App";
import { useParams, useNavigate } from "react-router-dom";

interface Meeting {
  title: string;
  type: string;
  date: string;
  time: string;
  meetingLink: string;
  members: string[];
}

const ViewMeeting = () => {
  const [meet, setMeet] = useState<Meeting | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMeeting, setUpdatedMeeting] = useState<Meeting | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/${id}`);
        const data = await response.json();
        setMeet(data.data);
        setUpdatedMeeting(data.data);
      } catch (error) {
        console.error("Error fetching meeting data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (updatedMeeting) {
      setUpdatedMeeting({
        ...updatedMeeting,
        [field]: e.target.value,
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedMeeting(meet);
  };

  const handleSave = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await fetch(`${api}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedMeeting),
      });
      // const data = await response.json();
      // console.log("DATA UPDATED>>>", data);

      setMeet(updatedMeeting);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meeting?"
    );
    if (confirmDelete) {
      try {
        await fetch(`${api}/${id}`, {
          method: "DELETE",
        });
        navigate("/meetings");
        alert("Meeting deleted successfully");
      } catch (error) {
        console.error("Error deleting meeting:", error);
      }
    }
  };

  if (!meet) return <p>Loading...</p>;

  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        <Verticalbar decor={"B0E2E3"} />
        <div className="flex items-center shadow-md shadow-[#E1C9F7E0] rounded-sm font-jose px-4">
          <div className="flex flex-col gap-4 w-max py-8 ">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              <div>
                <p>Title</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedMeeting?.title || ""}
                    onChange={(e) => handleInputChange(e, "title")}
                  />
                ) : (
                  <p>{meet.title}</p>
                )}
              </div>
              <div>
                <p>Type</p>
                {isEditing ? (
                  <input
                    type="text"
                    value={updatedMeeting?.type || ""}
                    onChange={(e) => handleInputChange(e, "type")}
                  />
                ) : (
                  <p>{meet.type}</p>
                )}
              </div>
              <div>
                <p>Date</p>
                {isEditing ? (
                  <input
                    type="date"
                    value={updatedMeeting?.date || ""}
                    onChange={(e) => handleInputChange(e, "date")}
                  />
                ) : (
                  <p>{new Date(meet.date).toLocaleDateString("en-US")}</p>
                )}
              </div>
              <div>
                <p>Time</p>
                {isEditing ? (
                  <input
                    type="time"
                    value={updatedMeeting?.time || ""}
                    onChange={(e) => handleInputChange(e, "time")}
                  />
                ) : (
                  <p>{meet.time}</p>
                )}
              </div>
            </div>
            <div>
              <p>Link</p>
              {isEditing ? (
                <input
                  type="text"
                  value={updatedMeeting?.meetingLink || ""}
                  onChange={(e) => handleInputChange(e, "meetingLink")}
                />
              ) : (
                <p>{meet.meetingLink}</p>
              )}
            </div>
            <div>
              <p>Members</p>
              {isEditing ? (
                <input
                  type="text"
                  value={updatedMeeting?.members.join(", ") || ""}
                  onChange={(e) => handleInputChange(e, "members")}
                />
              ) : (
                <p>{meet.members.join(", ")}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="inline-flex gap-1 rounded-lg border p-2 text-center border-[#E1C9F7]"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="inline-flex gap-1 rounded-lg border p-2 text-center border-[#E1C9F7]"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button onClick={handleEdit} className="inline-flex gap-1">
                  <img src={edit} alt="edit button" />
                  Edit
                </button>
                <button onClick={handleDelete} className="inline-flex gap-1">
                  <img src={del} alt="delete button" />
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMeeting;
