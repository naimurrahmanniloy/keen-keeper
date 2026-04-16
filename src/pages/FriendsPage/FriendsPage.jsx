import { useLoaderData, useParams } from "react-router";
import DetailsPageCard from "./DetailsPageCard";
import { HiOutlineBellSnooze } from "react-icons/hi2";
import { LuArchive, LuMessageSquareText } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import RecentActivities from "./RecentActivities";

const FriendsPage = () => {
  const { id } = useParams();
  const friendsData = useLoaderData();
  const expectedData = friendsData.find((friendData) => friendData.id == id);
  const { handleBtn } = useContext(FriendContext);

  return (
    <div className="container mx-auto my-4 flex flex-col lg:flex-row gap-6 px-4">
      <div className="w-full lg:w-1/4">
        <DetailsPageCard expectedData={expectedData} />

        <div className="flex flex-row lg:flex-col mt-6 gap-2 sm:gap-4 overflow-x-auto pb-2">
          <button className="btn flex-1 lg:w-full min-w-fit">
            <HiOutlineBellSnooze className="text-xl" />
            <span className="hidden sm:inline">Snooze 2 weeks</span>
            <span className="sm:hidden">Snooze</span>
          </button>
          <button className="btn flex-1 lg:w-full">
            <LuArchive className="text-xl" />
            Archive
          </button>
          <button className="btn flex-1 lg:w-full">
            <FaRegTrashAlt className="text-xl text-red-600" />
            Delete
          </button>
        </div>
      </div>

      <div className="w-full lg:w-3/4 space-y-6">
        <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
          {[
            {
              label: "Day Since Contact",
              value: expectedData.days_since_contact,
            },
            { label: "Goal (Days)", value: expectedData.goal },
            { label: "Next Due", value: expectedData.next_due_date },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center"
            >
              <h1 className="text-3xl text-[#244d3f] font-bold">
                {stat.value}
              </h1>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 sm:p-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#244d3f] font-semibold text-lg">
                Relationship Goals
              </p>
              <p className="text-gray-600">
                Connect Every{" "}
                <span className="font-bold">{expectedData.goal} days</span>
              </p>
            </div>
            <button className="btn">Edit</button>
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
          <h3 className="text-[#1a3a32] font-semibold text-lg mb-4">
            Quick Check-In
          </h3>
          <div className="grid  lg:grid-cols-3 gap-4">
            <button
              className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              onClick={() => handleBtn({ ...expectedData, type: "Call" })}
            >
              <MdAddIcCall className="w-8 h-8 text-[#1a3a32] mb-2" />
              <span className="text-gray-600 font-medium">Call</span>
            </button>

            <button
              className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              onClick={() => handleBtn({ ...expectedData, type: "Text" })}
            >
              <LuMessageSquareText className="w-8 h-8 text-[#1a3a32] mb-2" />
              <span className="text-gray-600 font-medium">Text</span>
            </button>

            <button
              className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm cursor-pointer"
              onClick={() => handleBtn({ ...expectedData, type: "Video" })}
            >
              <BiVideo className="w-8 h-8 text-[#1a3a32] mb-2" />
              <span className="text-gray-600 font-medium">Video</span>
            </button>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default FriendsPage;
