import ShimmerUI from "./ShimmerUI";
import RestauContainer from "./RestauContainer";
import FilterButtons from "./FilterButtons";

import { useContext } from "react";
import { DataContext } from "./DataContextProvider";
import FoodCarousel from "./FoodCarousel";
import TopRestauCarousel from "./TopRestauCarousel";

const AppBody = ()=>{
  const {data, title, filteredRestau, handleFilter, userName, loginStatus} = useContext(DataContext);
  return data?.length===0 ? <ShimmerUI /> : (
    <div className="relative top-[80px] py-4">
      <FoodCarousel />
      <TopRestauCarousel />
      {userName!=="" && loginStatus==="Logout"? 
        <h1 className="font-[BasicGrotesque] w-[1180px] mx-auto text-2xl text-grey-900 font-bold pt-3" style={{textTransform:"capitalize"}}>{`Hi ${userName}!`}</h1>
        : null
      }
      <h1 className="font-[BasicGrotesque] w-[1180px] mx-auto text-2xl text-grey-900 font-bold pt-9 pb-3">{title}</h1>
      <FilterButtons onFilter={handleFilter} restauList={data}/>
      <RestauContainer filterRestau={filteredRestau}/>
    </div>
  );
}

export default AppBody;