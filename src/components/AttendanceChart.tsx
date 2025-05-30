"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 90,
    absent: 75,
  },
  {
    name: "Thu",
    present: 90,
    absent: 75,
  },
  {
    name: "Fri",
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-lg p-4 h-full border dark:border-gray-700">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          Attendance
        </h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className="dark:invert"
        />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#ddd"
            className="dark:stroke-gray-600"
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            className="dark:fill-gray-300"
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            className="dark:fill-gray-300"
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              borderColor: "lightgray",
              backgroundColor: "white",
            }}
            labelStyle={{ color: "#374151" }}
            itemStyle={{ color: "#374151" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
