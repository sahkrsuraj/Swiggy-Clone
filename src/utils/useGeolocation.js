import { useEffect, useState } from "react";
import { GEOLOCATION_API } from "./constants";

const useGeolocation = (address)=>{
  const[latitude, setLatitude] = useState(0);
  const[longitude, setLongitude] = useState(0);

  const getLatLon = async()=>{
    const url = GEOLOCATION_API;
    const params = new URLSearchParams({
      q: address,
      format: "json"
    });

    try{
      const response = await fetch(`${url}?${params}`);
      const data = await response?.json();
      if(data?.length > 0){
        setLatitude(data[0]?.lat);
        setLongitude(data[0]?.lon);
      }
    }
    catch(error){
      console.error("Error:", error?.message);
      return null;
    }
  }

  useEffect(() => {
    getLatLon();
  });
  
  return {latitude, longitude};
}
export default useGeolocation;