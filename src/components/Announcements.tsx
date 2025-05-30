const Announcements = () => {
    return (
      <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm p-4 rounded-md border dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Announcements</h1>
          <span className="text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer">View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="bg-lamaSkyLight dark:bg-blue-900/20 dark:border dark:border-blue-800/30 rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-gray-900 dark:text-white">Lorem ipsum dolor sit</h2>
              <span className="text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              expedita. Rerum, quidem facilis?
            </p>
          </div>
          <div className="bg-lamaPurpleLight dark:bg-purple-900/20 dark:border dark:border-purple-800/30 rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-gray-900 dark:text-white">Lorem ipsum dolor sit</h2>
              <span className="text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              expedita. Rerum, quidem facilis?
            </p>
          </div>
          <div className="bg-lamaYellowLight dark:bg-yellow-900/20 dark:border dark:border-yellow-800/30 rounded-md p-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-gray-900 dark:text-white">Lorem ipsum dolor sit</h2>
              <span className="text-xs text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-700 rounded-md px-1 py-1">
                2025-01-01
              </span>
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              expedita. Rerum, quidem facilis?
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Announcements;
