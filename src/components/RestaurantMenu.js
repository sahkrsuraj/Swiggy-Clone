import React, {useState} from 'react';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Accordion from './Accordion';

const RestaurantMenu = ()=>{
  const [accordionIndex, setAccordionIndex] = useState(null);
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  if(resInfo===null) return <ShimmerUI/>;
  
  const {name, cuisines, areaName, avgRatingString, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;
  const {lastMileTravelString} = resInfo?.cards[2]?.card?.card?.info?.sla;
  const items = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCards = items?.filter((ele)=> ele?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="relative top-[80px] py-4 w-[800px] mx-auto pb-20 overflow-x-hidden">
      <div className="px-1">
        <div className="flex flex-col border-b-[1px] border-gray-200 pt-4 pb-8">
          <h1 className="font-[BasicGrotesque] w-[800px] mx-auto text-3xl text-grey-900 font-bold py-3">{name}</h1>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center gap-1">
              <p className="font-[BasicGrotesque] text-[#02060CBF] text-lg font-bold">{name}</p>
              <p className="font-[BasicGrotesque] text-[#02060CEA] text-base font-medium">{cuisines.join(", ")}</p>
              <p className="font-[BasicGrotesque] text-[#02060C99] text-sm font-extralight">{`${areaName}, ${lastMileTravelString}`}</p>
            </div>
            <div className="flex flex-col gap-1 border border-gray-300 py-4 px-3 rounded-md">
              <div className="flex items-center justify-center">
                <FaStar strokeWidth={1} size={18} color="green" fill="green"/> 
                <p>{avgRatingString}</p>
              </div>
              <p className="bg-gray-200 h-[1px] w-[95%] mx-auto"></p>
              <p className="">{totalRatingsString}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center w-full bg-gray-100">
          {itemCards?.map((ele,index)=>(
            <Accordion 
              key={ele?.card?.card?.title} 
              title={ele?.card?.card?.title} data={ele?.card?.card?.itemCards}
              showItem={index===accordionIndex? true: false}
              setAccordionIndex={()=>setAccordionIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;