import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { LuMessageSquareText } from "react-icons/lu";
import { MdAddIcCall } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { format } from "date-fns";

const RecentActivities = () => {
  const { personalData } = useContext(FriendContext);
  const formattedDate = format(new Date(), "MMMM d, yyyy");
  return (
    <div>
      <div className=" mx-auto p-4 font-sans">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#244d3f]">
            Recent Interactions
          </h2>
          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
            Full History
          </button>
        </div>

        {/* Interaction Card */}
        {personalData.map((data) => {
          return (
            <div
              key={data.id}
              className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer m-5"
            >
              <div className="text-3xl mr-5 grayscale-[0.2]">
                {data.type == "Text" ? (
                  <LuMessageSquareText className="w-8 h-8 text-[#1a3a32] mb-2" />
                ) : (
                  ""
                )}
                {data.type == "Call" ? (
                  <MdAddIcCall className="w-8 h-8 text-[#1a3a32] mb-2" />
                ) : (
                  ""
                )}
                {data.type == "Video" ? (
                  <BiVideo className="w-8 h-8 text-[#1a3a32] mb-2" />
                ) : (
                  ""
                )}
              </div>
              <div className="flex w-full justify-between items-center ">
                <div className="flex flex-col">
                  <div className="text-[#334155] font-semibold text-lg">
                    {data.type}{" "}
                    <span className="text-[#64748b] font-normal">
                      with {data.name}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-[#94a3b8] text-sm">{formattedDate}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;
