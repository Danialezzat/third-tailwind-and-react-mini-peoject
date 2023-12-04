import React from 'react'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src="../../images/firstpic.avif" alt="" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Manage Data Analytics Centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt deleniti repudiandae ullam distinctio porro necessitatibus enim consequatur id error numquam sequi autem itaque facilis, eum nulla ipsa laboriosam recusandae voluptas!
                    
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>
                    get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics