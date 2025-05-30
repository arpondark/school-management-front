const Pagination = () => {
    return (
      <div className="p-4 flex items-center justify-between text-gray-500 dark:text-gray-400">
        <button
          disabled
          className="py-2 px-4 rounded-md bg-slate-200 dark:bg-gray-700 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300"
        >
          Prev
        </button>
        <div className="flex items-center gap-2 text-sm">
          <button className="px-2 rounded-sm bg-lamaSky dark:bg-blue-600 text-gray-900 dark:text-white">1</button>
          <button className="px-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">2</button>
          <button className="px-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">3</button>
          <span className="text-gray-500 dark:text-gray-400">...</span>
          <button className="px-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300">10</button>
        </div>
        <button className="py-2 px-4 rounded-md bg-slate-200 dark:bg-gray-700 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-gray-300">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
