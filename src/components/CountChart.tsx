"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 106,
    fill: "white",
  },
  {
    name: "Girls",
    count: 53,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];

const CountChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-xl w-full h-full p-4 border dark:border-gray-700">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          Students
        </h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className="dark:invert"
        />
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:invert"
        />
      </div>
      {/* BOTTOM */}
      <div className="flex justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky dark:bg-blue-500 rounded-full" />
          <h1 className="font-bold text-gray-900 dark:text-white">1,234</h1>
          <h2 className="text-xs text-gray-300 dark:text-gray-400">
            Boys (55%)
          </h2>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow dark:bg-yellow-500 rounded-full" />
          <h1 className="font-bold text-gray-900 dark:text-white">1,234</h1>
          <h2 className="text-xs text-gray-300 dark:text-gray-400">
            Girls (45%)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
