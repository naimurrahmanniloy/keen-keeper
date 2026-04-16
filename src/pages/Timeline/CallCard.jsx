// import React, { useContext } from "react";
// import { FriendContext } from "../../context/FriendContext";
// import { MdAddIcCall } from "react-icons/md";

// const CallCard = () => {
//   const { personCallData } = useContext(FriendContext);
//   return (
//     <div>
//       {" "}
//       <div className="space-y-4 ">
//         {personCallData.map((callData) => (
//           <div
//             key={callData.id}
//             className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//           >
//             <div className="text-3xl mr-5 grayscale-[0.2]">
//               {" "}
//               <MdAddIcCall className="w-8 h-8 text-[#1a3a32] mb-2" />
//               {callData.icon}
//             </div>
//             <div className="flex flex-col">
//               <div className="text-[#334155] font-semibold text-lg">
//                 Call{" "}
//                 <span className="text-[#64748b] font-normal">
//                   with {callData.name}
//                 </span>
//               </div>
//               <div className="text-[#94a3b8] text-sm mt-0.5">
//                 {callData.date}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CallCard;
