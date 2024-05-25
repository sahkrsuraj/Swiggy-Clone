import { useState } from "react";

const useSearchFilter = (data,handleFilter)=>{

  const [inputValue, setInputValue] = useState("");

  // get the entered value
  const getValue = (event)=>{
    setInputValue(event?.target?.value);
  };

  // search the item
  const searchItem = ()=>{
    const filtered = data?.filter((restau)=>{
      const inputArr = inputValue?.toLowerCase().split(" ");
      const cuisines = restau?.info?.cuisines?.map((cuisine)=> cuisine.toLowerCase());
      
      // check if cuisine is present
      const case1 = restau?.info?.cuisines?.some(element => element.toLowerCase() === inputValue.toLowerCase());
      // check if all the cuisines is present
      const case2 = inputArr?.some(ele => cuisines.includes(ele));
      // check if part of input match name
      const case3 = inputArr?.some(ele => restau?.info?.name?.toLowerCase().includes(ele))

      return case1 || case2 || case3;
    });
    
    handleFilter(filtered);
  }

  const handleSearch = (event)=>{
    if(event.key==='Enter' || event.type==='click')
      searchItem();
  }

  return { inputValue, handleSearch, getValue };
}

export default useSearchFilter;