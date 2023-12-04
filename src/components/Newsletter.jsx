import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>
                    What tips & tricks to optimize your flow?
                </h1>
                <p>
                    Sign up to our newsletter and stay up to date
                </p>
            </div>
            <div className='my-4'>
                <div className='flex felx-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email...'/>
                    <button className='bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 mx-6 py-3'>Notify Me</button>
                </div>
                <p>we care about the protection of your data. read our <span className='text-[#00df9a]'> privacy police</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter