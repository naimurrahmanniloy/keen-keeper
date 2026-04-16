import React, { Suspense } from "react";
import { IoMdAdd } from "react-icons/io";
import AllFriends from "./AllFriends";

const Homepage = () => {
  return (
    <div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 ">
            {" "}
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
              <h1 className="text-[#244d3f] font-bold text-[30px]">9</h1>
              <p className="py-2 text-[#64748b]">Total Friends</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
              <h1 className="text-[#244d3f] font-bold text-[30px]">2</h1>
              <p className="py-2 text-[#64748b]">On Track</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
              <h1 className="text-[#244d3f] font-bold text-[30px]">7</h1>
              <p className="py-2 text-[#64748b]">Need Attention</p>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
              <h1 className="text-[#244d3f] font-bold text-[30px]">9</h1>
              <p className="py-2 text-[#64748b]">Interaction This Month</p>
            </div>
          </div>
          <hr className="mt-10 h-0.5 border-[#64748b]" />
        </div>
      </div>
      <div className="bg-base-200">
        <div className="container mx-auto">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AllFriends />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
