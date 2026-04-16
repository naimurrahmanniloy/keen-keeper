import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import { MdAddIcCall } from "react-icons/md";
import { LuMessageSquareText } from "react-icons/lu";
import { BiVideo } from "react-icons/bi";
import { format } from "date-fns";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
import { FaAngleDown } from "react-icons/fa";

const Timeline = () => {
  const { personalData } = useContext(FriendContext);
  const formattedDate = format(new Date(), "MMMM d, yyyy");

  const [filterType, setFilterType] = useState("All");

  const filteredData =
    filterType === "All"
      ? personalData
      : personalData.filter((item) => item.type === filterType);

  if (personalData.length === 0) {
    return (
      <div className="h-120">
        <NoDataFound />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-[#1e293b] mb-6">Timeline</h2>

      {/* Filter Dropdown */}
      <div className="relative w-full sm:w-64 mb-8">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-white border-gray-200"
          >
            {filterType === "All" ? "All Interactions" : filterType}{" "}
            <FaAngleDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg border border-gray-100"
          >
            <li>
              <button onClick={() => setFilterType("All")}>All</button>
            </li>
            <li>
              <button onClick={() => setFilterType("Call")}>Call</button>
            </li>
            <li>
              <button onClick={() => setFilterType("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setFilterType("Video")}>Video</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((data) => (
            <div
              key={data.id}
              className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="mr-5">
                {data.type === "Text" && (
                  <LuMessageSquareText className="w-8 h-8 text-[#1a3a32]" />
                )}
                {data.type === "Call" && (
                  <MdAddIcCall className="w-8 h-8 text-[#1a3a32]" />
                )}
                {data.type === "Video" && (
                  <BiVideo className="w-8 h-8 text-[#1a3a32]" />
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
          ))
        ) : (
          <div className="text-center py-10 text-gray-400 italic">
            No {filterType} interactions found.
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
