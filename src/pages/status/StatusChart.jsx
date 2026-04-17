import React from "react";
import { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { DataContext } from "../../context/DataProvider";



const StatusChart = () => {

    
const { processData } = useContext(DataContext);

const CallCount = processData.filter(
      (item) => item.Intereaction === "call"
    );
const SmsCount = processData.filter((item)=>item.Intereaction=="sms");
const VideoCount = processData.filter((item)=>item.Intereaction=="video");


  const data = [
    { name: "Call", value: CallCount.length },
    { name: "SMS", value: SmsCount.length },
    { name: "Video", value: VideoCount.length },
  ];

  const COLORS = ["#4F46E5", "#22C55E", "#F97316"];

  return (
    <div className="mt-10">
      <div className="max-w-[1110px] w-full mx-auto">
        <h2 className="text-[48px] font-bold">Friendship Analytics</h2>
        <div className="Chat-section mt-10 ">
          <PieChart className="block mx-auto" width={400} height={400}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={4}
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StatusChart;
