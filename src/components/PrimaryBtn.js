import { useState, useEffect } from "react";

const PrimaryBtn = (props)=>{
  const {buttonName, filterFunc, onFilter} = props;

  // filter restau based on rating
  const filterRestau = ()=>{
    const filtered = filterFunc();
    onFilter(filtered);
  }
  return(
    <button className="border border-gray-300 rounded-3xl px-3 py-1 shadow-[0px_1px_5px_rgba(0,_0,_0,_0.24)] font-[BasicGrotesque] text-[#02060CBF]" onClick={filterRestau}>{buttonName}</button>
  );
}

export default PrimaryBtn;