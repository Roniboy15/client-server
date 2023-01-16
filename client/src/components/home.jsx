import React, { useState } from 'react'


const Home = () => {
<<<<<<< HEAD
  return (
    <div >
      <div className='p-5'>
        <h1 className="text-[70px] md:text-[100px]  text-center ">
          Welcome to ToDoList
        </h1>

        <img className='mx-auto w-[100%] md:w-[70%]'  src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt="" />
      </div>
=======
  const [ar, setAr] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  return (
    <div >
      <div>
        <h1 className="text-3xl font-bold underline text-center">
          TailWindCss
        </h1>
      </div>
      <div className='flex flex-row flex-wrap justify-between md:p-[50px] p-[20px]'>

        {ar.map(item => (
          <>
            {item < 4 &&
              <div className='flex justify-center bg-center  bg-cover bg-[url("https://cdn.britannica.com/89/149189-050-68D7613E/Bengal-tiger.jpg?w=400&h=300&c=crop")] items-center shadow-lg border bg-blue-900 text-white md:mt-[1%] mt-[4%] h-[300px] lg:basis-[24.2%] md:basis-[32.5%] basis-full rounded-[20px] '>
              
              </div>}
          </>

        ))}

      </div>

>>>>>>> 6d0d933e33aa0b71a0d8a7c35ddc2d2c3d52901a
    </div>
  )
}

export default Home