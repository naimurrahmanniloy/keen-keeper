import React from "react";
import { FriendContext } from "../../context/FriendContext";
import { MdAddIcCall } from "react-icons/md";
import CallCard from "./CallCard";
import TextCard from "./TextCard";

const Timeline = () => {
  return (
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
      </div>

      {/* Call Items */}
      <CallCard />
      {/* Text Items */}
      <TextCard />
    </div>
  );
};

export default Timeline;
