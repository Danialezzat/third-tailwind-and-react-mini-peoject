import React from 'react'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-col-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hove:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[3rem] bg-white ' src="../../images/single.png"  />
                <h2 className='text-2xl font-bold text-center py-8 '>Single user</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hove:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[3rem] bg-white ' src="../../images/double.png"  />
                <h2 className='text-2xl font-bold text-center py-8 '>Single user</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hove:scale-105 duration-500'>
                <img className='w-20 mx-auto mt-[3rem] bg-white ' src="../../images/three.jpeg"  />
                <h2 className='text-2xl font-bold text-center py-8 '>Single user</h2>
                <p className='text-center text-4xl font-bold'>$140</p>
                <div className='text-center font-medium '>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>

    </div>
  )
}

export default Cards