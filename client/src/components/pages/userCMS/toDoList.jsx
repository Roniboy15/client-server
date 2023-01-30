import React from 'react'
import Auth from '../../../shared/components/auth';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FaCheck, FaArchive, FaTrash, FaPlus } from 'react-icons/fa'
import { useState } from 'react';
import UpdateTodoModal from '../../../shared/components/updateToDoModal';
import { apiGet } from '../../../services/services';
import AddTodoModal from '../../../shared/components/addToDoModal';
import { GET_TODOS_URL } from '../../../constant/constant';
import { useEffect } from 'react';


const ToDoList = () => {
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [openAddModal, setOpenAddModal] = useState(false)
    const [loading,setLoading] = useState(true)
    const [todos,setTodos] = useState([])
    const [todo, setTodo] = useState({
        date: "2023-12-22",
        time: "14:00",
        title: "Go surf",
        description: "Go to surf in the ocean",
        _id: 1
    })

    const getMyTodosList = async() =>{
        setLoading(true)
        const {data} = await apiGet(GET_TODOS_URL);
        console.log(data)
        setTodos(data)
        setLoading(false)
    }

    useEffect(()=>{
        getMyTodosList()
    },[])
    return (
        <div>
            <Auth />
            <div className='container mx-auto py-1'>
                <button onClick={()=>{
                    setOpenAddModal(true)
                }} className=" relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-500 to-slate-700 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 ">
                    <div className='mt-[11px]'></div>
                    <span className=" relative px-[4px] py-[10px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                        <FaPlus />
                    </span>
                </button>
                <div className="relative overflow-x-auto mt-2">
                {loading ? <h1>Loading...</h1>:
                    <Table className="w-[100%] text-sm text-left text-gray-500 dark:text-gray-400">
                        <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          
                            <Tr>
                                <Th scope="col" className="px-6 py-3">
                                    Todo
                                </Th>
                                <Th scope="col" className="px-6 py-3">
                                    Description
                                </Th>
                                <Th scope="col" className="px-6 py-3">
                                    Date
                                </Th>
                                <Th scope="col" className="px-6 py-3">
                                    Time
                                </Th>
                                <Th scope="col" className="px-6 py-3">
                                    Edit
                                </Th>
                                <Th scope="col" className="px-6 py-3">
                                    Archive/Delete
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>

                            {todos?.map(item=>(
                            <Tr key={item._id} className="bg-white    border-b-[2px] dark:bg-gray-800 dark:border-gray-700">

                            <Th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </Th>
                            <Td className="px-6 py-4">
                                {item.description}
                            </Td>
                            <Td className="px-6 py-4">
                                { new Date(item.date).toLocaleDateString()}
                            </Td>
                            <Td className="px-6 py-4">
                                {item.time}
                            </Td>
                            <Td className="px-6 py-4 d-flex items-center ">

                                <button onClick={() => {
                                    setTodo(todo)
                                    setOpenUpdateModal(true)
                                }} className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="relative px-1 py-1 md:px-2 md:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Edit
                                    </span>

                                </button>

                                <button className="relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                                    <div className='mt-[12px]'></div>
                                    <span className="relative  px-1 py-1 md:px-2 md:py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        <FaCheck />
                                    </span>
                                </button>

                            </Td>

                            <Td className='d-flex '>
                                <div className='md:mx-8 w-[50%] '>
                                    <button className=" relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-slate-500 to-slate-700 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 ">
                                        <div className='mt-[11px]'></div>
                                        <span className=" relative px-[4px] py-[10px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                                            <FaArchive />
                                        </span>
                                    </button>

                                    <button className=" relative inline-flex items-center justify-center p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 ">
                                        <div className='mt-[11px]'></div>
                                        <span className=" relative px-[4px] py-[10px] transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
                                            <FaTrash />
                                        </span>
                                    </button>

                                </div>

                            </Td>
                        </Tr>


                            ))}
                        </Tbody>
                    </Table>}
                </div>
            </div>
            <UpdateTodoModal
                todo={todo}
                open={openUpdateModal}
                setOpen={setOpenUpdateModal}
            />
            <AddTodoModal
                open={openAddModal}
                setOpen={setOpenAddModal}
            />
        </div>
    )
}

export default ToDoList