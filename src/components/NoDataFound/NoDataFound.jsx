import { Ghost, PlusCircle } from "lucide-react";
import { Link } from "react-router";

const NoDataFound = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white border-2 border-dashed border-gray-100 rounded-3xl mt-6 min-h-75 text-center">
      {/* Animated Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#244d3f]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="relative bg-white p-6 rounded-full shadow-sm border border-gray-50">
          <Ghost size={48} className="text-[#244d3f]/40 animate-bounce" />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        Nothing to see here... yet!
      </h3>
      <p className="text-gray-500 max-w-xs mx-auto mb-8 leading-relaxed">
        You haven't made any calls, messages, or videos with this friend. Time
        to reach out!
      </p>

      {/* Call to Action Button */}
      <Link to={"/"}>
        <button className="group flex items-center gap-2 bg-[#244d3f] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1a3a32] transition-all hover:shadow-lg active:scale-95">
          <PlusCircle
            size={20}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
          Start Interaction
        </button>
      </Link>
    </div>
  );
};
export default NoDataFound;
