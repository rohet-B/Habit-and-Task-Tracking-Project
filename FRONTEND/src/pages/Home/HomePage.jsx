import React, { useEffect, useState } from 'react'

const HomePage = () => {
        // const currentDate = new Date();
        // const dateString = currentDate.toLocaleDateString();
        // const timeString = currentDate.toLocaleTimeString();

    const [dateString,setCurrentDate] = useState();
    const [timeString,setTimestring] = useState();

    const currentGreetings = () =>{
        const today = new Date();
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }
        setCurrentDate(today.toLocaleDateString("en-IN",options));

        if (today.getHours()<12){
            setTimestring("Good Morning");
        }
        else if(today.getHours()>12 && today.getHours()<18){
            setTimestring("Good Afternoon");
        }
        else{
            setTimestring("Good Evening");
        }
    }

    useEffect(()=>{
        currentGreetings()
    },[])
    
  return (
    <>
        <div className='h-fit w-full bg-slate-800 flex justify-center p-3 items-center gap-25 xl:gap-200'>
            <div className='text-slate-50 text-lg font-bold'>
                <div>{timeString}, Rohit</div> 
                <div className='text-slate-400'>{dateString}</div>
            </div>
            <div>
                <div className='dropdown dropdown-bottom dropdown-left cursor-pointer text-4xl'>
                    <div tabIndex={0} role="button" class="fa-solid fa-circle-user"></div>
                     <ul tabIndex="-1" className="dropdown-content menu bg-slate-900 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li className='text-slate-50 font-bold'><a>Item 1</a></li>
                        <li className='text-slate-50 font-bold'><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default HomePage
