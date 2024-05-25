import {SWIGGY_MENU_API_URL} from "./constants";
import { useState, useEffect, useContext } from "react";

const useRestaurantMenu = (resId)=>{
  const [restauInfo, setRestauInfo] = useState(null);

  const fetchMenu = async()=>{
    const data = await fetch(`${SWIGGY_MENU_API_URL}${resId}`);
    const json = await data?.json();
    setRestauInfo(json?.data);
  }

  useEffect(()=>{
    fetchMenu();
  },[]);
  return restauInfo;
}

export default useRestaurantMenu;