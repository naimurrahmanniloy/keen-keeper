import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

import { FriendContext } from "../../context/FriendContext";

const Stats = () => {
  const { personalData } = useContext(FriendContext);
  console.log(personalData);

  const callCount = personalData.filter((d) => d.type === "Call").length;
  const textCount = personalData.filter((d) => d.type === "Text").length;
  const videoCount = personalData.filter((d) => d.type === "Video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#0088FE" },
    { name: "Text", value: textCount, fill: "#00C49F" },
    { name: "Video", value: videoCount, fill: "#FFBB28" },
  ];

  const hasData = callCount + textCount + videoCount > 0;
  return (
    <div>
      <h1 className="text-5xl container mx-auto mt-6 font-bold">
        Friendship Analytics
      </h1>
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 container mt-10  mx-auto">
        <h3 className="text-gray-700 font-semibold mb-4 mt-6">
          By Interaction Type
        </h3>{" "}
        <div className="flex justify-center">
          {hasData ? (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Corner radius is the rounded edge of each pie slice
                cornerRadius="50%"
                fill="#8884d8"
                // padding angle is the gap between each pie slice
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend className="m-4" />
              <Tooltip />
            </PieChart>
          ) : (
            <p className="text-gray-500">No interaction data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
