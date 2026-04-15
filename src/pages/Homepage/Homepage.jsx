import React from "react";
import { IoMdAdd } from "react-icons/io";

const Homepage = () => {
  return (
    <div className="bg-base-200 ">
      <div className="hero w-10/12 mx-auto pt-20">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">
              Friends to keep close in your life
            </h1>
            <p className="py-6 text-[#64748b]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn bg-[#244d3f] text-white">
              <IoMdAdd />
              Add Friend
            </button>
          </div>
        </div>
      </div>

      <div className="tracked-section container mx-auto mt-10">
        <div className="grid grid-cols-4 gap-20 ">
          {" "}
          <div className="text-center border p-6 bg-white rounded-2xl">
            <h1 className="text-[#244d3f] font-bold text-xl">10</h1>
            <p className="py-2 text-[#64748b]">Total Friends</p>
          </div>
          <div className="text-center border p-6 bg-white rounded-2xl">
            <h1 className="text-[#244d3f] font-bold text-xl">10</h1>
            <p className="py-2 text-[#64748b]">Total Friends</p>
          </div>
          <div className="text-center border p-6 bg-white rounded-2xl">
            <h1 className="text-[#244d3f] font-bold text-xl">10</h1>
            <p className="py-2 text-[#64748b]">Total Friends</p>
          </div>
          <div className="text-center border p-6 bg-white rounded-2xl">
            <h1 className="text-[#244d3f] font-bold text-xl">10</h1>
            <p className="py-2 text-[#64748b]">Total Friends</p>
          </div>
        </div>
        <hr className="mt-10 h-0.5 border-[#64748b]" />
      </div>
    </div>
  );
};

export default Homepage;
