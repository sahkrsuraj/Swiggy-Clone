import { useContext, useState, useEffect } from "react";
import useGeolocation from "../utils/useGeolocation";
import { DataContext } from "./DataContextProvider";
import { IoClose } from "react-icons/io5";

const Location = (props)=>{
  const {onClose} = props;
  const[address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const {latitude, longitude} = useGeolocation(address);
  const{setLatitude, setLongitude, setApiAddress} = useContext(DataContext);

  const handleInputChange = (event)=>{
    setAddress(event.target.value);
  }

  const handleKeyDown = async(event)=>{
    if(event.key==='Enter'){
      setLoading(true);
      await updateLocation();
      setLoading(false);
      onClose();
    }
  }

  const updateLocation = async()=>{
    setLatitude(latitude);
    setLongitude(longitude);
    setApiAddress(address);
  }

  const handleCancelBtn = ()=>{
    setAddress("");
  }

  return(
    <div className="bg-[#282C3F81] flex z-[10000] fixed top-0 left-0 bottom-0 right-0 overflow-hidden">
        <div className="bg-white w-[35%] gap-5 pr-10 pl-40 pt-8">
          <div className="">
            <div className="cursor-pointer" onClick={onClose}><IoClose strokeWidth={1} size={26}/></div>
            <div className="flex gap-3 h-[50px] w-full mt-6 border border-[#d4d5d9] px-5 shadow-[0px_1px_10px_rgba(0,_0,_0,_0.24)]">
              <input className="h-full w-[80%] outline-none" 
              type="text" 
              spellCheck="false"
              value={address}
              placeholder="Search for area, street name.."
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              >
              </input>
              <button className="text-[#fc8019] text-xs" onClick={handleCancelBtn}>Cancel</button>
            </div>
          </div>
        </div>
        <div className="bg-inherit"></div>
        {
          loading && <p>Loading...</p>
        }
      </div>
  )
}

export default Location;