import { Link } from "react-router-dom";
import RestauCard, {withOneFreeDeliveryLabel} from "./RestauCard";

const RestauContainer = ({filterRestau})=>{
  const RestauCardFreeDelivery = withOneFreeDeliveryLabel(RestauCard);
  return(
    <div className="w-[1180px] grid grid-cols-4 gap-8 mx-auto pt-7 pb-8">
      {
        filterRestau?.map((restaurant)=> 
          <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
            {restaurant.info?.loyaltyDiscoverPresentationInfo?.freedelMessage === "FREE DELIVERY"?
              <RestauCardFreeDelivery restauData = {restaurant}/>:
              <RestauCard restauData = {restaurant}/>
            }
          </Link>
        )
      }
    </div>
  );
};

export default RestauContainer;