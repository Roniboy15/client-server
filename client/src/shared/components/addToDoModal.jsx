import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { apiPost } from '../../services/services'
import { ADD_TODO_URL } from '../../constant/constant'

export default function AddTodoModal({ open, setOpen }) {
    //   const [open, setOpen] = useState(true)
    const { register, handleSubmit, formState: { errors },resetField,reset } = useForm()
    const cancelButtonRef = useRef(null)
    const onSub = (_bodyData) => {
        console.log(_bodyData)
        addTodo(_bodyData)
        setOpen(false)
    }
    const addTodo = async (_bodyData) =>{
        const data = await apiPost(ADD_TODO_URL,_bodyData);
        console.log(data)
    }
    useEffect(()=>{
        resetField()
        reset()
    },[open])
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative w-[100%] transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <ExclamationTriangleIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-[100%]">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Add Todo
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                
                                                    <form onSubmit={handleSubmit(onSub)} className="mt-8 space-y-6 w-100" >
                                                        <input type="hidden" name="remember" defaultValue="true" />
                                                        <div className="-space-y-px rounded-md shadow-sm">

                                                            <div >
                                                                <label >
                                                                    Title:
                                                                </label>
                                                                <input
                                                                    {...register('title', { required: { value: true, message: "Title is required!" }, minLength: { value: 2, message: 'Minimum length is required' }, maxLength: { value: 500, message: 'Maximum length is required' } })}

                                                                    type="text"
                                                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"

                                                                />
                                                                {errors.title && <p className='text-red-600 mt-0'>{errors.title.message}</p>}
                                                            </div>
                                                            <div >
                                                                <label className="form-label">
                                                                    description:
                                                                </label>
                                                                <input
                                                                    {...register('description', { required: { value: true, message: "Description is required!" }, minLength: { value: 2, message: 'Minimum length is required' }, maxLength: { value: 500, message: 'Maximum length is required' } })}
                                                                    type="text"
                                                                    className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                />
                                                                {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                                                            </div>
                                                            <div >
                                                                <label className="form-label">
                                                                    Time:
                                                                </label>
                                                                <input
                                                                    {...register('time', { required: { value: true, message: 'Time is required!' } })}
                                                                    type="time"
                                                                    className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                />
                                                                {errors.time && <p className='text-red-600'>{errors.time.message}</p>}
                                                            </div>
                                                            <div >
                                                                <label className="form-label">
                                                                    Date:
                                                                </label>
                                                                <input
                                                                    {...register('date', { required: { value: true, message: 'Date is required!' } })}
                                                                    type="date"
                                                                    className=" relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                                />
                                                                {errors.date && <p className='text-red-600'>{errors.date.message}</p>}
                                                            </div>

                                                        </div>

                                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                            <button
                                                                type="submit"
                                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"

                                                            >
                                                                Add
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                onClick={() => setOpen(false)}
                                                                ref={cancelButtonRef}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}