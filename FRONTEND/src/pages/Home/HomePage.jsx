import React, { useEffect, useState } from 'react'
import CarouselDate from '../../components/CarouselDate';

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
            <div >
                <button className='cursor-pointer text-4xl text-amber-200'>
                    <i class="fa-solid fa-circle-user"></i>
                </button>
            </div>
        </div>
        <CarouselDate/>
    </>
  )
}

export default HomePage
