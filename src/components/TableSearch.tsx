import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 dark:ring-gray-600 px-2 bg-white dark:bg-gray-800">
      <Image
        src="/search.png"
        alt=""
        width={14}
        height={14}
        className="dark:invert"
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] p-2 bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
    </div>
  );
};

export default TableSearch;
