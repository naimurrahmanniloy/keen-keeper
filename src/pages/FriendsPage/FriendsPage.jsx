import { useLoaderData, useParams } from "react-router";
import DetailsPageCard from "./DetailsPageCard";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive, LuMessageSquareText } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

const FriendsPage = () => {
  const { id } = useParams();

  const friendsData = useLoaderData();

  const expectedData = friendsData.find((friendData) => friendData.id == id);

  const { handleBtn } = useContext(FriendContext);

  return (
    <div className="container mx-auto my-4 flex gap-2">
      <div className="w-[24%]">
        <DetailsPageCard expectedData={expectedData} />
        <div className="flex flex-col mt-6 gap-4">
          <button className="btn">
            <HiOutlineBellSnooze className="text-xl" />
            Snooze 2 weeks
          </button>
          <button className="btn">
            <LuArchive className="text-xl" />
            Archive
          </button>
          <button className="btn">
            <FaRegTrashAlt className="text-xl text-red-600" />
            Delete
          </button>
        </div>
      </div>
      <div className="w-[76%] ml-3">
        <div className="grid grid-cols-3 gap-2">
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">
              {expectedData.days_since_contact}
            </h1>
            <p className="text-gray-500 text-[18px]">Day Since Contact</p>
          </div>
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">
              {expectedData.goal}
            </h1>
            <p className="text-gray-500 text-[18px]">Goal (Days)</p>
          </div>
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">
              {expectedData.next_due_date}
            </h1>
            <p className="text-gray-500 text-[18px]">Next Due</p>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 ">
          <div className="flex justify-between">
            <div className="text-[20px]">
              <p className="text-[#244d3f] font-semibold">Relationship Goals</p>
              <p>Connect Every 30 days</p>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 mx-auto mt-5">
            <h3 className="text-[#1a3a32] font-semibold text-lg mb-4">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Call Card */}
              <button
                className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                onClick={() => handleBtn({ ...expectedData, type: "Call" })}
              >
                <MdAddIcCall className="w-8 h-8 text-[#1a3a32] mb-2" />
                <span className="text-gray-600 font-medium">Call</span>
              </button>

              {/* Text Card */}
              <button
                className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                onClick={() => handleBtn({ ...expectedData, type: "Text" })}
              >
                <LuMessageSquareText className="w-8 h-8 text-[#1a3a32] mb-2" />
                <span className="text-gray-600 font-medium">Text</span>
              </button>

              {/* Video Card */}
              <button className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <BiVideo className="w-8 h-8 text-[#1a3a32] mb-2" />
                <span className="text-gray-600 font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
