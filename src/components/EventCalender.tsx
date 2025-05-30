"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
	{
		id: 1,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 2,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		id: 3,
		title: "Lorem ipsum dolor",
		time: "12:00 PM - 2:00 PM",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

const EventCalendar = () => {
	const [value, onChange] = useState<Value>(new Date());

	return (
		<div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm p-4 rounded-md border dark:border-gray-700">
			<Calendar onChange={onChange} value={value} />
			<div className="flex items-center justify-between">
				<h1 className="text-xl font-semibold my-4 text-gray-900 dark:text-white">
					Events
				</h1>
				<Image
					src="/moreDark.png"
					alt=""
					width={20}
					height={20}
					className="dark:invert"
				/>
			</div>
			<div className="flex flex-col gap-4">
				{events.map((event) => (
					<div
						className="p-5 rounded-md border-2 border-gray-100 dark:border-gray-700 border-t-4 odd:border-t-lamaSky dark:odd:border-t-blue-500 even:border-t-lamaPurple dark:even:border-t-purple-500 dark:bg-gray-800/30"
						key={event.id}
					>
						<div className="flex items-center justify-between">
							<h1 className="font-semibold text-gray-600 dark:text-gray-200">
								{event.title}
							</h1>
							<span className="text-gray-300 dark:text-gray-400 text-xs">
								{event.time}
							</span>
						</div>
						<p className="mt-2 text-gray-400 dark:text-gray-300 text-sm">
							{event.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default EventCalendar;
