import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { MdAddIcCall } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import { BiVideo } from "react-icons/bi";
import { format } from "date-fns";
import { DiBackbone } from "react-icons/di";
import NoDataFound from "../../components/NoDataFound/NoDataFound";

const Timeline = () => {
  const { personalData } = useContext(FriendContext);
  const formattedDate = format(new Date(), "MMMM d, yyyy");

  return personalData.length == 0 ? (
    <div className="h-120">
      <NoDataFound />
    </div>
  ) : (
    <div className="container mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Timeline</h2>
      {/* Filter Dropdown */}
      <div className="relative w-full sm:w-64 mb-8">
        <select className="appearance-none w-full bg-white border border-gray-100 rounded-lg px-4 py-2.5 text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20">
          <option>Filter timeline</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://w3.org"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>{" "}
      <div className="space-y-4 ">
        {personalData.map((data) => (
          <div
            key={data.id}
            className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
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
            <div className="flex flex-col">
              <div className="text-[#334155] font-semibold text-lg">
                {data.type}{" "}
                <span className="text-[#64748b] font-normal">
                  with {data.name}
                </span>
              </div>
              <div className="text-[#94a3b8] text-sm mt-0.5">
                {formattedDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
