import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import FormModal from "@/components/FormModel";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import { studentsData } from "@/lib/data";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
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

const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 dark:border-gray-700 even:bg-slate-50 dark:even:bg-gray-800/30 text-sm hover:bg-lamaPurpleLight dark:hover:bg-purple-900/20"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-gray-900 dark:text-gray-300">{item.studentId}</td>
      <td className="hidden md:table-cell text-gray-900 dark:text-gray-300">{item.grade}</td>
      <td className="hidden md:table-cell text-gray-900 dark:text-gray-300">{item.phone}</td>
      <td className="hidden md:table-cell text-gray-900 dark:text-gray-300">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky dark:bg-blue-600 hover:bg-blue-200 dark:hover:bg-blue-500">
              <Image src="/view.png" alt="" width={16} height={16} className="dark:invert" />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="student" type="delete" id={item.id}/>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white dark:bg-gray-800/50 dark:backdrop-blur-sm p-4 rounded-md flex-1 m-4 mt-0 border dark:border-gray-700">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold text-gray-900 dark:text-white">All Students</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-yellow-600 hover:bg-yellow-300 dark:hover:bg-yellow-500">
              <Image src="/filter.png" alt="" width={14} height={14} className="dark:invert" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow dark:bg-yellow-600 hover:bg-yellow-300 dark:hover:bg-yellow-500">
              <Image src="/sort.png" alt="" width={14} height={14} className="dark:invert" />
            </button>
            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
