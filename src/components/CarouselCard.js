import React from "react";
import { CDN_URL, EXTENSION } from "../utils/constants";

const CarouselCard = (props) =>{
  const {image} = props;

  return (
    <div>
      <div className="h-[180px] w-36">
        <div className="h-full w-full">
          <img src={`${CDN_URL}${EXTENSION},w_288,h_360/${image}`} alt="item"/>
        </div>
      </div>
    </div>
  )
}

export default CarouselCard;