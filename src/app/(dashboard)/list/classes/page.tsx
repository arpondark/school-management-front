import FormModal from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { classesData, role } from "@/lib/data";
import Image from "next/image";

type Class = {
  id: number;
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
};

const columns = [
  {
    header: "Class Name",
    accessor: "name",
  },
  {
    header: "Capacity",
    accessor: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessor: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ClassListPage = () => {
  const renderRow = (item: Class) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 dark:border-gray-700 even:bg-slate-50 dark:even:bg-gray-800/30 text-sm hover:bg-lamaPurpleLight dark:hover:bg-purple-900/20"
    >
      <td className="flex items-center gap-4 p-4 text-gray-900 dark:text-white font-medium">{item.name}</td>
      <td className="hidden md:table-cell text-gray-700 dark:text-gray-300">{item.capacity}</td>
      <td className="hidden md:table-cell text-gray-700 dark:text-gray-300">{item.grade}</td>
      <td className="hidden md:table-cell text-gray-700 dark:text-gray-300">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="class" type="update" data={item} />
              <FormModal table="class" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm p-4 rounded-md flex-1 m-4 mt-0 border dark:border-gray-700">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-900 dark:text-white">All Classes</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-yellow-600 hover:bg-yellow-300 dark:hover:bg-yellow-500">
              <Image src="/filter.png" alt="" width={14} height={14} className="dark:invert" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-yellow-600 hover:bg-yellow-300 dark:hover:bg-yellow-500">
              <Image src="/sort.png" alt="" width={14} height={14} className="dark:invert" />
            </button>
            {role === "admin" && <FormModal table="class" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={classesData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;
