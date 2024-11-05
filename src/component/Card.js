import React from 'react'

const Card = ({heading, details}) => {
  return (
    <div className='w-80 h-80 shadow-md flex flex-col bg-white'>
        <div className='h-4/5 w-full p-10 text-center'>
            <h2 className='font-bold text-xl mt-5'>{heading && heading}</h2>
            <p className='mt-8 text-gray-500'>{details && details}</p>
        </div>
        <div className='font-bold bg-slate-200 flex-1 flex justify-center items-center'>
            <button className='hover:text-red-600 transition duration-300'>Read More</button>
        </div>
    </div>
  )
}

export default Card