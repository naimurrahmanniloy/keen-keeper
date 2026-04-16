// import React, { useContext } from "react";
// import { FriendContext } from "../../context/FriendContext";
// import { LuMessageSquareText } from "react-icons/lu";

// const TextCard = () => {
//   const { personalData } = useContext(FriendContext);

//   return (
//     <div>
//       {" "}
//       <div className="space-y-4 ">
//         {personalData.map((data) => (
//           <div
//             key={data.id}
//             className="flex items-center p-5 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
//           >
//             <div className="text-3xl mr-5 grayscale-[0.2]">
//               {" "}
//               <LuMessageSquareText className="w-8 h-8 text-[#1a3a32] mb-2" />
//               {data.icon}
//             </div>
//             <div className="flex flex-col">
//               <div className="text-[#334155] font-semibold text-lg">
//                 {data.type}{" "}
//                 <span className="text-[#64748b] font-normal">
//                   with {data.name}
//                 </span>
//               </div>
//               <div className="text-[#94a3b8] text-sm mt-0.5">{data.date}</div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TextCard;
