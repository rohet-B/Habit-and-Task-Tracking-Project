import React from 'react'

const HomePage = () => {
  return (
    <>
        <div className='h-fit w-full bg-slate-800 flex justify-center p-3 items-center gap-25 xl:gap-200'>
            <div className='text-slate-50 text-lg font-bold'>
                <div>Good Evening, Rohit</div>
                <div className='text-slate-400'>Wednesday, 10 February 2025</div>
            </div>
            <div >
                <button className='cursor-pointer text-4xl text-amber-200'>
                    <i class="fa-solid fa-circle-user"></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default HomePage
