import { useState } from 'react';
import { FaTrash } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import Navbar from "./components/Navbar";
import { FaPlus } from "react-icons/fa6";
import { MdContentCopy } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import FiltersTableTwo from './components/FiltersTableTwo';

function App() {
  const [tableDetails, setTableDetails] = useState(
    [
      {
        name: "Winter SALES FW23 - intari uit 14 zile",
        filters: ["Sales Season", "Num days since arrived in stock"],
        products: "9",
      },
      {
        name: "Winter SALES FW23",
        filters: ["Sales Season"],
        products: "8",
      },
      {
        name: "Winter SALES FW23 - intari uit 14 zile",
        filters: ["Sales Season", "Num days since arrived in stock"],
        products: "5",
      },
      {
        name: "Winter SALES FW23",
        filters: ["Sales Season"],
        products: "10",
      },
      {
        name: "Winter SALES FW23 - intari uit 14 zile",
        filters: ["Sales Season", "Num days since arrived in stock"],
        products: "5",
      },
    ]
  );

  return (
    <>
      <Navbar />
      <div className="relative w-full p-3 mb-6 mt-6">
        <div className="flex justify-between w-full pb-10 border-b-2 border-green-600 mb-10">
          <div className="flex justify-between shadow-lg gap-2 items-center py-2 px-4 bg-blue-700 rounded-md cursor-pointer">
            <FaPlus className="fill-white"/>
            <p className="text-white text-sm">Create</p>
          </div>

          <div className="flex justify-center items-center bg-gray-300 cursor-pointer py-2 px-4 rounded-md border-b-2 border-gray-500">
            Upload
          </div>
        </div>

        <div className="bg-transparent rounded-md shadow-lg overflow-x-auto">
          <table className="w-full">
            <thead className="">
              <tr className="border border-solid border-l-0 border-r-0 ">
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-4 whitespace-nowrap">Status</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-4 whitespace-nowrap">Name</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-4 whitespace-nowrap">#Filters</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-4 whitespace-nowrap">#Products</th>
                <th className="text-sm text-left border border-l-0 border-r-0 text-gray-500 px-3 py-4 whitespace-nowrap">      </th>
              </tr>
            </thead>
            <tbody className="">
              {tableDetails.map((item) => {
                return (
                  <tr className="border border-solid w-auto border-l-0 border-r-0 px-4 py-3">
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-3">
                      <IoMdCheckmark size={20} color={"#1D4ED8"}/>
                    </td>
                    <td className="text-sm text-left whitespace-nowrap text-gray-500 px-3 py-5">
                        {item.name}
                    </td>
                    <td className="whitespace-nowrap text-gray-500 px-3 py-5">
                      <div className='flex gap-2'>
                        {item.filters.map((filter, index) => {
                          return (
                            <FiltersTableTwo filter={filter} key={index}/>
                          )
                        })}
                      </div>
                    </td>
                    <td className="text-sm whitespace-nowrap text-left text-gray-500 px-3 py-3">{item.products}</td>
                    <td className="text-sm text-right whitespace-nowrap text-gray-500 px-3 py-3">
                      <div className="flex space-between gap-3 w-full justify-end">
                        <IoPencil color={"#1D4ED8"} size={20} className="cursor-pointer"/>
                        <MdContentCopy  color={"#1D4ED8"} size={20} className="cursor-pointer"/>
                        <MdDownload className="fill-blue-700 cursor-pointer" size={20}/>
                        <FaTrash className="fill-red-600 cursor-pointer" size={20} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App;
