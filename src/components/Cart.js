import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import AccordionItem, { AdvanceAccordionItem } from "./AccordionItem";
import Billing from "./Billing";
import Delivery from "./Delivery";

const Cart = ()=>{
  const CartItem = AdvanceAccordionItem(AccordionItem);
  
  const cartItems = useSelector((store)=>store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearCart());
  }   

  const [isDelivery, setIsDelivery] = useState(false);

  const handleCheckout = () => {
    setIsDelivery(true);
  };

  return(
    !isDelivery?
    (<div className={`relative top-[80px] mx-auto py-8 pb-20 px-28 flex items-start justify-between`}>
      <div className={`w-[800px] ${cartItems.length===0? "mx-auto": null} overflow-x-hidden`}>
        <div className='w-[800px] flex items-center justify-between px-1 bg-white cursor-pointer'>
          <h3 className="font-[BasicGrotesque] text-3xl text-grey-900 font-bold py-3">Cart</h3>
          <p className="font-[BasicGrotesque] text-lg text-orange-500" onClick={handleClearCart}>Clear Cart</p>
        </div>
        {cartItems.length===0? (<p className="w-[800px] flex items-center justify-center font-[Montserrat] text-xl pt-8">Your cart is empty!</p>): 
          cartItems?.map((item)=>(
          <CartItem
            key={item.id}
            id={item.id}
            isVeg={item.isVeg}
            name={item.name}
            description={item .description}
            defaultPrice={item.defaultPrice}
            imgUrl={item.imgUrl}
            rating={item.rating}
            ratingCount={item.ratingCount}
            btnName="Remove"
          />
        ))}
      </div>
      {cartItems.length===0? null : <Billing handleCheckout={handleCheckout}/>}
    </div>) : (<Delivery/>)
  )
}

export default Cart;