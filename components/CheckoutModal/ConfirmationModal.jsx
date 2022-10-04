import React from 'react'

function ConfirmationModal() {
  return (
    <div className='flex flex-col lg:flex-col justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center m-16 rounded-lg border-solid border-4 drop-shadow-[0_4px_7px_rgba(0,0,0,0.25)] border-black bg-white w-1/2 p-8 m-2 hadow-2xl shadow-black'>
            <div>
                <img
                    src='/images/levitating-recovered.gif'
                />
            </div>
            <div>
                <h1 className='text-xl font-black pt-4 pb-4'>Nice, Multiplier Added.</h1>
            </div>
            <div className='pl-12 pr-12 flex justify-center items-center pt-4 pb-4'>
                <p className='text-center'>Go to the my players page to view and activate your multiplier for an upcoming game.</p>
            </div>
            <div>
                <button className='flex flex-row pl-16 pr-16 pt-4 pb-4 text-base tracking-wider bg-white border-4 border-solid border-black rounded-md text-center uppercase font-bold shadow-2xl shadow-black'>Take Me There</button>
            </div>
            <div className='pt-8'>
                <a className='font-bold underline cursor-pointer'>SHOP MORE STUFF</a>
            </div>
        </div>
    </div>
  )
}

export default ConfirmationModal