import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-lamaPurple dark:odd:bg-purple-900/30 even:bg-lamaYellow dark:even:bg-yellow-900/30 p-4 flex-1 min-w-[130px] dark:border dark:odd:border-purple-800/30 dark:even:border-yellow-800/30">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white dark:bg-gray-800 px-2 py-1 rounded-full text-green-600 dark:text-green-400">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} className="dark:invert" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-gray-900 dark:text-white">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500 dark:text-gray-400">{type}s</h2>
    </div>
  );
};

export default UserCard;
