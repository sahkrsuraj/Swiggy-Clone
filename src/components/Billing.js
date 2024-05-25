import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Billing = (props) => {
  const {handleCheckout} = props;
  const itemCount = useSelector((store) => store.cart.itemCount);
  const dispatch = useDispatch();

  const calculatePrice = (count, price) => {
    const value = count * (price / 100);
    return value;
  };

  const totalBalance = itemCount.reduce((sum, item) => {
    const value = calculatePrice(item.count, item.defaultPrice);
    return (sum += value);
  }, 0);

  const deliverOrder = ()=>{
    dispatch(clearCart());
    handleCheckout();
  }

  return (
    <div className="w-[400px] flex flex-col justify-center gap-4">
      <div className="w-full px-5 py-8 flex flex-col gap-6 justify-center items-start text-[#02060c99] rounded-md bg-neutral-50 shadow-[0px_3px_8px_rgba(0,_0,_0,_0.24)]">
        <h3 className="w-full font-[BasicGrotesque] text-lg ">Billing: </h3>
        {itemCount?.map((item) => (
          <div key={item.id} className="w-full flex flex-col gap-2 justify-center items-start border border-[#d4d5d9] border-t-0 border-l-0 border-r-0 boder-b-1 pb-2">
            <h4 className="font-medium truncate">{item.name}</h4>
            <div className="w-full flex items-center justify-between">
              <p className="block">
                Items Count: <span>{item.count}</span>
              </p>
              <p>₹ {calculatePrice(item.count, item.defaultPrice)}</p>
            </div>
          </div>
        ))}
        <div className="w-full flex items-center justify-between">
          <p className="font-medium">Total Balance: </p>
          <p className="font-semibold">₹ {totalBalance}</p>
        </div>
      </div>
      <button className="bg-[#fc8019] text-white h-[50px] w-full px-8 mt-7 hover:scale-95 transition-transform duration-300" onClick={deliverOrder}>Checkout Order</button>
    </div>
  );
};

export default Billing;
