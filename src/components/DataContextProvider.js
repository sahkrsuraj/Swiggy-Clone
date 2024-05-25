import { RESTAURANTS_API_URL } from "../utils/constants";
import {useState, useEffect, createContext} from "react"

export const DataContext = createContext();

export const DataContextProvider = ({children})=>{

  const[userName, setUserName] = useState("");
  const[loginStatus, setLoginStatus] = useState("Login");
  const[data, setData] = useState([]);
  const[title, setTitle] = useState("");
  const[titleCarousel, setTitleCarousel] = useState("");
  const[foodCarousel, setFoodCarousel] = useState([]);
  const[titleTopRestau, setTitleTopRestau] = useState("");
  const[topFoods, setTopFoods] = useState([]);
  const[filteredRestau, setFilteresRestau] = useState([]);
  const[apiAddress, setApiAddress] = useState("Bengaluru, Karnataka, India");
  const[latitude,setLatitude] = useState("12.9715987");
  const[longitude,setLongitude] = useState("77.5945627");

  const updateName = (name)=>{
    setUserName(name);
  }

  const updateLoginStatus = (newStatus)=>{
    setLoginStatus(newStatus);
  }

  useEffect(()=>{
    fetchData();
  },[latitude, longitude]);

  const fetchData = async ()=>{
    const data = await fetch(`${RESTAURANTS_API_URL}lat=${latitude}&lng=${longitude}`);
    const json = await data.json();
    console.log(json);
    setTitle(json?.data?.cards[2]?.card?.card?.title);
    setTitleCarousel(json?.data?.cards[0]?.card?.card?.header?.title);
    setFoodCarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setTitleTopRestau(json?.data?.cards[1]?.card?.card?.header?.title);
    setTopFoods(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteresRestau(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const handleFilter = (filteredRestau)=>{
    setFilteresRestau(filteredRestau);
  };

  return(
    <DataContext.Provider 
    value={{
      data, title, foodCarousel, titleCarousel, filteredRestau, titleTopRestau, topFoods,
      handleFilter, userName, updateName, loginStatus, updateLoginStatus,setLatitude, 
      setLongitude,latitude,longitude, apiAddress, setApiAddress
    }}>
      {children}
    </DataContext.Provider>
  )
};