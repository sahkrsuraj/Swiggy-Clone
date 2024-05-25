import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "./DataContextProvider";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import RestauCard from "./RestauCard";

const TopRestauCarousel = () =>{
  const {topFoods, titleTopRestau} = useContext(DataContext);
  const [current, setCurrent] = useState(0);

  const itemWidth = 270;
  const gapWidth = 32;
  const totalWidth = (itemWidth + gapWidth) * topFoods?.length;
  const maxTranslateX = Math.max(totalWidth - 1180, 0);
  const translateX = Math.min(current * ((itemWidth + gapWidth)*2.5), maxTranslateX);


  const handlePrev = ()=>{
    let index = current >0? current-1 : current;
    setCurrent(index);
  };

  const handleNext = ()=>{
    let index = current <= topFoods?.length -1? current+1 : current;
    setCurrent(index);
  };

  return (
    <div className="w-[1180px] mx-auto pt-6 pb-8 border border-[#d4d5d9] border-t-0 border-l-0 border-r-0 boder-b-1">
      <div className="flex justify-between">
        <h2 className="font-[BasicGrotesque] text-2xl text-grey-900 font-bold py-3">{titleTopRestau}</h2>
        <div className="flex gap-2 ">
          <FiArrowLeftCircle className="cursor-pointer text-blue-500" strokeWidth={1} size={32} onClick={handlePrev}/>
          <FiArrowRightCircle className="cursor-pointer text-blue-500" strokeWidth={1} size={32} onClick={handleNext}/>
        </div>
      </div>
      <div className="overflow-y-hidden overflow-x-scroll no-scrollbar pl-2 pb-3 pt-2">
        <div className="flex gap-8"
          style={{ 
            transform: `translateX(-${translateX}px)`, 
            transition: 'transform 0.5s ease-out'
          }}
        >
          {
            topFoods?.map((item)=>
              <Link to={`restaurants/${item?.info?.id}`} key={item?.info?.id}>
                <RestauCard restauData = {item}/>
              </Link>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TopRestauCarousel;