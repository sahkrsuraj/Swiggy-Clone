import { CDN_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";

const RestauCard = (props)=>{
  const {restauData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines, locality} = restauData?.info;
  const {deliveryTime} = restauData?.info?.sla;
  
  return(
    <div data-testid="restauCard" className="z-[1000] flex flex-col justify-center gap-3 w-[270px] h-[290px] rounded-xl bg-neutral-50 shadow-[0px_3px_8px_rgba(0,_0,_0,_0.24)] hover:scale-90 transition-transform duration-200 shrink-0 grow-0">
      <div className="h-[160px] rounded-xl">
        <img className="w-full h-full object-cover rounded-xl" src={CDN_URL+cloudinaryImageId} alt="image"/>
      </div>
      <div className="px-3 pb-4 h-[116px]">
        <h3 className="font-[BasicGrotesque] text-lg font-bold text-gray-700 truncate">{name}</h3>
        <div className="flex items-center gap-2 text-gray-700">
          <FaStar strokeWidth={1} size={16} color="gold" className="z-[10] fill-[gold]"/>
          <p className="font-[BasicGrotesque] text-base font-bold">{avgRating}</p>
          <p className="font-[BasicGrotesque] text-base font-bold">{deliveryTime} mins</p>
        </div>
        <p className="font-[BasicGrotesque] truncate text-gray-400 font-extralight">{cuisines?.join(', ')}</p>
        <p className="font-[BasicGrotesque] truncate text-gray-400 font-extralight">{locality}</p>
      </div>
    </div>
  );
};

export const withOneFreeDeliveryLabel = (RestauCard)=>{
  return (props)=>{
    return(
      <div className="relative">
        <div className="absolute left-0 top-[20px] flex gap-2 items-center justify-center text-white py-1 px-2 w-[125px] h-[40px] z-[100000] rounded-tl-[4px] rounded-tr-[8px] rounded-bl-[4px] rounded-br-[8px] bg-gradient-to-r from-[#ED456D] to-[#F36F45]">
          <p className="text-lg font-bold font-[Montserrat]">one</p>
          <p className="text-[12px] font-[Montserrat]">Free Label</p>
        </div>
        <RestauCard {...props}/>
      </div>
    )
  }
}

export default RestauCard;