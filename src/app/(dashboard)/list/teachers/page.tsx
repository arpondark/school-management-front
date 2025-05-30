import FormModal from "@/components/FormModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjects",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => (
    <tr
      key={item.id}
      className="border-b border-gray-100 dark:border-gray-700 even:bg-gradient-to-r even:from-slate-50 even:to-blue-50 dark:even:from-gray-800/30 dark:even:to-blue-900/20 text-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition-all duration-300 hover:shadow-sm"
    >
      <td className="flex items-center gap-4 p-6">
        <div className="relative">
          <Image
            src={item.photo}
            alt={`${item.name}'s photo`}
            width={48}
            height={48}
            className="md:hidden xl:block w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-600"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800 dark:text-white text-base">{item.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell px-4 py-6">
        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium px-3 py-1 rounded-full border dark:border-blue-800/30">
          {item.teacherId}
        </span>
      </td>
      <td className="hidden md:table-cell px-4 py-6">
        <div className="flex flex-wrap gap-1">
          {item.subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-xs font-medium px-2 py-1 rounded-md border dark:border-emerald-800/30"
            >
              {subject}
            </span>
          ))}
        </div>
      </td>
      <td className="hidden md:table-cell px-4 py-6">
        <div className="flex flex-wrap gap-1">
          {item.classes.map((cls, index) => (
            <span
              key={index}
              className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs font-medium px-2 py-1 rounded-md border dark:border-amber-800/30"
            >
              {cls}
            </span>
          ))}
        </div>
      </td>
      <td className="hidden lg:table-cell px-4 py-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-700 dark:text-gray-300">{item.phone}</span>
        </div>
      </td>
      <td className="hidden lg:table-cell px-4 py-6">
        <span className="text-gray-600 dark:text-gray-400 text-sm">{item.address}</span>
      </td>
      <td className="px-4 py-6">
        <div className="flex items-center gap-3">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/view.png" 
                alt="View" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200 dark:invert" 
              />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800/50 dark:to-gray-900/50 dark:backdrop-blur-sm p-6 rounded-xl shadow-lg flex-1 m-4 mt-0 border border-gray-100 dark:border-gray-700">
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h1 className="hidden md:block text-2xl font-bold text-gray-800 dark:text-white bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            All Teachers
          </h1>
          <span className="hidden md:block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full border dark:border-purple-800/30">
            {teachersData.length} Total
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <TableSearch />
          </div>
          <div className="flex items-center gap-3 self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/filter.png" 
                alt="Filter" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200 dark:invert" 
              />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 dark:from-yellow-600 dark:to-orange-600 dark:hover:from-yellow-700 dark:hover:to-orange-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/sort.png" 
                alt="Sort" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200 dark:invert" 
              />
            </button>
            {role === "admin" && (
              <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <Table columns={columns} renderRow={renderRow} data={teachersData} />
      </div>
      {/* PAGINATION */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
};

export default TeacherListPage;
