import { useLoaderData, useParams } from "react-router";
import DetailsPageCard from "./DetailsPageCard";

const FriendsPage = () => {
  const { id } = useParams();

  const friendsData = useLoaderData();

  const expectedData = friendsData.find((friendData) => friendData.id == id);

  return (
    <div className="container mx-auto my-4 flex gap-2">
      <div className="w-[24%]">
        <DetailsPageCard expectedData={expectedData} />
        <div className="flex flex-col mt-6 gap-4">
          <button className="btn">Snooze 2 weeks</button>
          <button className="btn">Archive</button>
          <button className="btn">Delete</button>
        </div>
      </div>
      <div className="w-[76%] ml-3">
        <div className="grid grid-cols-3 gap-2">
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">62</h1>
            <p className="text-gray-500 text-[18px]">Day Since Contact</p>
          </div>
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">62</h1>
            <p className="text-gray-500 text-[18px]">Day Since Contact</p>
          </div>
          <div className=" bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center max-w-xs">
            <h1 className="text-[30px] text-[#244d3f] font-bold">62</h1>
            <p className="text-gray-500 text-[18px]">Day Since Contact</p>
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

            {/* Grid: 1 column on mobile, 3 columns on small screens and up */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Call Card */}
              <button className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg
                  className="w-8 h-8 text-[#1a3a32] mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="text-gray-600 font-medium">Call</span>
              </button>

              {/* Text Card */}
              <button className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg
                  className="w-8 h-8 text-[#1a3a32] mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <span className="text-gray-600 font-medium">Text</span>
              </button>

              {/* Video Card */}
              <button className="flex flex-col items-center justify-center py-6 px-4 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                <svg
                  className="w-8 h-8 text-[#1a3a32] mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://w3.org"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
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
