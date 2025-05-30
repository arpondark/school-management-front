"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

// USE LAZY LOADING

// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />
};

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const [open, setOpen] = useState(false);

  const getButtonConfig = () => {
    if (type === "create") {
      return {
        size: "px-6 py-3",
        bgColor: "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700",
        icon: (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        ),
        text: `Add New ${table.charAt(0).toUpperCase() + table.slice(1)}`,
        className: "rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
      };
    } else if (type === "update") {
      return {
        size: "w-9 h-9",
        bgColor: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
        icon: <Image src="/edit.png" alt="Edit" width={16} height={16} className="group-hover:scale-110 transition-transform duration-200" />,
        text: "",
        className: "rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      };
    } else {
      return {
        size: "w-9 h-9",
        bgColor: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
        icon: <Image src="/delete.png" alt="Delete" width={16} height={16} className="group-hover:scale-110 transition-transform duration-200" />,
        text: "",
        className: "rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      };
    }
  };

  const buttonConfig = getButtonConfig();

  const Form = () => {
    return type === "delete" && id ? (
      <div className="p-6 bg-gradient-to-br from-white to-gray-50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Delete {table.charAt(0).toUpperCase() + table.slice(1)}</h3>
          <p className="text-gray-600">
            All data will be lost. Are you sure you want to delete this {table}?
          </p>
        </div>
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="px-6 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Cancel
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete {table.charAt(0).toUpperCase() + table.slice(1)}
          </button>
        </div>
      </div>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <>
      <button
        className={`${buttonConfig.size} flex items-center justify-center gap-2 ${buttonConfig.bgColor} ${buttonConfig.className} group font-medium text-white`}
        onClick={() => setOpen(true)}
      >
        {buttonConfig.icon}
        {buttonConfig.text && <span className="hidden sm:inline">{buttonConfig.text}</span>}
      </button>
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl relative w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] max-h-[90vh] overflow-hidden">
            <Form />
            <button
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110"
              onClick={() => setOpen(false)}
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
