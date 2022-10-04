import React from 'react'

function Modal() {
  return (
    <div className='flex lg:flex-col justify-center items-center w-full'>
        <div className='rounded-lg border-solid border-4 drop-shadow-[0_4px_7px_rgba(0,0,0,0.25)] border-black bg-white w-4/6 p-8 m-2'>
            <div className='flex lg:flex-row sm:flex-col justify-center items-center gap-6'>
                <div>
                    <img
                        className='lg:w-3/4 sm:w-1/2'
                        src="/images/levitating-bhc.gif"
                        alt=""
                    />
                </div>
                <div className='lg:w-1/2 sm:w-full p-4'>
                    <h1 className='text-xl font-black pb-2'>Goals 2x Multiplier</h1>
                    <p>The Players of your choice will earn you 2x the BHC on every goal they score</p>
                </div>
                <div className='lg:w-1/4 w-full'>
                    <p className='pt-4 pb-4 text-'>Total</p>
                    <div className='flex flex-row gap-2'>
                        <img src="/favicon-16x16.png" alt=""/>
                        <p className='font-bold'>0 BHC</p>
                    </div>
                    <button className='w-full text-white p-2 border-[3px] cursor-pointer rounded-md shadow-2xl bg-black border-#9A9A9A border-solid mt-2 pt-2'>BUY</button>
                </div>
            </div>
            <div className='flex lg:w-4/6 lg:pl-16 pt-4 pb-4'>
                <h3 className='font-extrabold'>Select Your Player(s)</h3>
            </div>
            <div className='flex flex-col w-full'>
                <div className='grid lg:grid-cols-8 pl-4 grid-cols-2 w-full'>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player1.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player2.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player3.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player4.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player1.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player2.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player3.png' alt=''/>
                    <img className='w-32 p-4 h-32 cursor-pointer' src='/images/players/player4.png' alt=''/>
                </div>
                <div className='grid lg:grid-cols-8 pl-4 grid-cols-2 w-full'>
                <img className='w-32 p-4 h-32' src='/images/players/player1.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player2.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player3.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player4.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player1.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player2.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player3.png' alt=''/>
                    <img className='w-32 p-4 h-32' src='/images/players/player4.png' alt=''/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal