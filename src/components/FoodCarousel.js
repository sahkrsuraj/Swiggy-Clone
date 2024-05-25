import React, { useState, useContext } from "react";
import CarouselCard from "./CarouselCard";
import { DataContext } from "./DataContextProvider";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const FoodCarousel = () =>{
  const {foodCarousel, titleCarousel} = useContext(DataContext);
  const [current, setCurrent] = useState(0);

  const itemWidth = 144;
  const gapWidth = 20;
  const totalWidth = (itemWidth + gapWidth) * foodCarousel?.length;
  const maxTranslateX = Math.max(totalWidth - 1180, 0);
  const translateX = Math.min(current * ((itemWidth + gapWidth)*2.5), maxTranslateX);

  const handlePrev = ()=>{
    let index = current >0? current-1 : current;
    setCurrent(index);
  };

  const handleNext = ()=>{
    let index = current <= foodCarousel?.length -1? current+1 : current;
    setCurrent(index);
  };

  return (
    <div className="w-[1180px] mx-auto pt-6 pb-8 px-4 border border-[#d4d5d9] border-t-0 border-l-0 border-r-0 boder-b-1">
      <div className="flex justify-between">
        <h2 className="font-[BasicGrotesque] text-2xl text-grey-900 font-bold py-3">{titleCarousel}</h2>
        <div className="flex gap-2 ">
          <FiArrowLeftCircle className="cursor-pointer text-blue-500" strokeWidth={1} size={32} onClick={handlePrev}/>
          <FiArrowRightCircle className="cursor-pointer text-blue-500" strokeWidth={1} size={32} onClick={handleNext}/>
        </div>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll no-scrollbar px-5">
        <div className="flex gap-5"
          style={{ 
            transform: `translateX(-${translateX}px)`, 
            transition: 'transform 0.5s ease-out'
          }}
        >
          {
            foodCarousel?.map((item)=>
              <CarouselCard key={item.id} image={item.imageId}/>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default FoodCarousel;