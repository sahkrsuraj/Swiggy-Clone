import React from "react";
import AccordionItem from "./AccordionItem";
import { FaAngleDown, FaAngleUp} from "react-icons/fa";

const Accordion = (props)=>{
  const {title, data, showItem, setAccordionIndex} = props;

  const handleClick =()=>{
    setAccordionIndex();
  }

  return(
    <div className='w-full flex flex-col'>
      <div className='flex justify-between items-center px-1 bg-white cursor-pointer' onClick={handleClick}>
        <h3 className="font-sans text-[18px] text-gray-900 py-4 font-bold">
          {`${title} (${data?.length===undefined? 0: data?.length})`}
        </h3>
        {showItem? <FaAngleUp/>:<FaAngleDown/>}
      </div>
      {showItem && data?.map((item)=>(
        <AccordionItem
          key={item?.card?.info.id}
          id={item?.card?.info.id}
          isVeg={item?.card?.info?.isVeg}
          name={item?.card?.info?.name}
          description={ item?.card?.info?.description}
          defaultPrice={item?.card?.info?.defaultPrice || item?.card?.info?.price}
          imgUrl={item?.card?.info?.imageId}
          rating={item?.card?.info?.ratings?.aggregatedRating?.rating}
          ratingCount={item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
          btnName="Add"
        />
      ))}
    </div>
  )
}

export default Accordion;