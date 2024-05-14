import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Slider=({data})=>{
    const [slide,setSlide]=useState(1);

    const nextSlide=()=>{
        setSlide(slide===data.length-1?0:slide+1);
    }
    const prevSlide=()=>{
        setSlide(slide===0?data.length-1:slide-1);
    }
    
    return(
        <div className='relative flex justify-center align-items-center w-auto h-96'>
            <BsArrowLeftCircleFill className='absolute w-8 bg-gray left-4 hover:cursor-pointer filter-drop-shadow top-32' onClick={prevSlide}/>
            {data.map((item,idx)=>{
                return <img src={item.src} alt={item.alt} key={idx} className={slide===idx?"rounded-lg shadow-gray-500 w-auto h-full":"rounded-lg shadow-gray-500 w-full h-full hidden"}/>
            })}
            <BsArrowRightCircleFill className='absolute w-8 bg-gray right-4 hover:cursor-pointer filter-drop-shadow top-32' onClick={nextSlide}/>
        </div>
    )
}
export default Slider