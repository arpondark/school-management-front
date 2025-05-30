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
      className="border-b border-gray-100 even:bg-gradient-to-r even:from-slate-50 even:to-blue-50 text-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 hover:shadow-sm"
    >
      <td className="flex items-center gap-4 p-6">
        <div className="relative">
          <Image
            src={item.photo}
            alt={`${item.name}'s photo`}
            width={48}
            height={48}
            className="md:hidden xl:block w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-800 text-base">{item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell px-4 py-6">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
          {item.teacherId}
        </span>
      </td>
      <td className="hidden md:table-cell px-4 py-6">
        <div className="flex flex-wrap gap-1">
          {item.subjects.map((subject, index) => (
            <span
              key={index}
              className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded-md"
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
              className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-md"
            >
              {cls}
            </span>
          ))}
        </div>
      </td>
      <td className="hidden lg:table-cell px-4 py-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">{item.phone}</span>
        </div>
      </td>
      <td className="hidden lg:table-cell px-4 py-6">
        <span className="text-gray-600 text-sm">{item.address}</span>
      </td>
      <td className="px-4 py-6">
        <div className="flex items-center gap-3">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/view.png" 
                alt="View" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200" 
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
    <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg flex-1 m-4 mt-0 border border-gray-100">
      {/* TOP */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h1 className="hidden md:block text-2xl font-bold text-gray-800 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            All Teachers
          </h1>
          <span className="hidden md:block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
            {teachersData.length} Total
          </span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <div className="relative">
            <TableSearch />
          </div>
          <div className="flex items-center gap-3 self-end">
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/filter.png" 
                alt="Filter" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200" 
              />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 group">
              <Image 
                src="/sort.png" 
                alt="Sort" 
                width={16} 
                height={16} 
                className="group-hover:scale-110 transition-transform duration-200" 
              />
            </button>
            {role === "admin" && (
              <FormModal table="teacher" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
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
