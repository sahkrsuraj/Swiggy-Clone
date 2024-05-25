import PrimaryBtn from "./PrimaryBtn";

const FilterButtons = (props)=>{
  const {onFilter, restauList} = props;

  const getNumericalData = (string)=>{
    const parts = string.split(/\D+/).filter(ele=> ele !== "");
    const numberValue = parseInt(parts[0],10);
    return numberValue;
  }

  return(
    <div className="flex gap-2 w-[1180px] mx-auto pt-3">
      <PrimaryBtn 
      buttonName="Clear Filter"
      filterFunc={()=> restauList}
      onFilter={onFilter}/>
      <PrimaryBtn 
      buttonName="Ratings 4.0+"
      filterFunc={()=>
        restauList.filter(restau => restau.info.avgRating > 4.0)
      }
      onFilter={onFilter}/>
      <PrimaryBtn 
      buttonName="Less than 300"
      filterFunc={()=>
        restauList.filter(restau => getNumericalData(restau.info?.costForTwo) <= 300)
      }
      onFilter={onFilter}/>
      <PrimaryBtn 
      buttonName="Pure Veg"
      filterFunc={()=>
        restauList.filter(restau => restau?.info?.veg === true)
      }
      onFilter={onFilter}/>
    </div>
  );
}

export default FilterButtons;