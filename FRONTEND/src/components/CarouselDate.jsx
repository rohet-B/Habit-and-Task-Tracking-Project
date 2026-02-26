import React, { useRef,useEffect, useState } from 'react'

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

    const total_days_arrays = [];
    for (let i=1;i<=total_days;i++){
        total_days_arrays.push(i);
    }

    const [activeDay,setActiveDay] = useState(day);
    const todayRef = useRef(null);
    useEffect(() => {
        todayRef.current?.scrollIntoView({
            behavior: "smooth",
            inline: "center" //controls horizontal alignment when scrolling.
        });
    }, [activeDay]);

    

  return (
    <div className='flex items-center justify-center mt-3.5'>
        <div className='carousel w-150 h-10 flex items-center gap-5'>
            {
                total_days_arrays.map((item,index)=>(
                    <button key={index} className={`cursor-pointer carousel-item rounded-xl h-10 min-w-7 px-2 flex justify-center items-center
                        ${item === activeDay ? "bg-slate-400 text-slate-950 font-bold":" bg-slate-900 text-slate-50 "}`}
                        ref={item === activeDay ? todayRef : null}
                        onClick={()=>setActiveDay(item)}
                    >{item}</button>
                ))
            }
            {/* 
                == compares only value after type conversion,
                === compares both value and type without conversion. (Use this Because React prefers strict comparison.)
            */}
        </div>
    </div>
  )
}

export default CarouselDate
