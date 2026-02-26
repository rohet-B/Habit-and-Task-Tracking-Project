import React from 'react'

const CarouselDate = () => {
    const today = new Date(); 
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 0-11 (Jan = 0)
    const day = today.getDate();
    const total_days = new Date(year,month,0).getDate();
    // 0 means here:
        // Go to the 1st day of the given month (here 2, since we have added 1 in month_var and in js 2 means march)
        // Then go back 1 day back 
        // Result = Last day of the previous month which is the total days
  return (
    <div className='flex items-center justify-center mt-3.5'>
        <div className='carousel w-150 h-10 flex items-center gap-5'>
            <button className='cursor-pointer carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                {day} out of {total_days} for month {month}, {year}
            </button>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                72
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                73
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                74
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                75
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                76
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                77
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                78
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                79
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                80
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                81
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                82
            </div>   
            <div className='carousel-item bg-slate-900 text-slate-50 rounded-xl h-10 min-w-7 px-2 flex justify-center items-center'>
                83
            </div>   
    </div>
    </div>
  )
}

export default CarouselDate
