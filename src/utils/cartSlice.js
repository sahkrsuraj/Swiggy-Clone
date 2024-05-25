import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    itemCount:[],
  },
  reducers:{
    addItem: (state,action)=>{
      const {id,name,defaultPrice} = action.payload;
      const isItem = state.items.some((item)=>item.id === id);
      if(!isItem){
        state.items.push(action.payload);
        state.itemCount.push({id:id, count:1,name:name,defaultPrice:defaultPrice});
      }
    },
    removeItem: (state,action)=>{
      const itemId = action.payload.id;
      state.items= state.items.filter((item)=>item.id !== itemId);
      state.itemCount = state.itemCount.filter((item)=>item.id !== itemId);
    },
    clearCart: (state)=>{
      state.items.length = 0;
      state.itemCount.length = 0;
    },
    incrementItemCount:(state,action)=>{
      const itemId = action.payload.id;
      const existingItem = state.itemCount.find((item)=>item.id===itemId)
      if(existingItem){
        existingItem.count += 1;
      }
    },
    decrementItemCount:(state,action)=>{
      const itemId = action.payload.id;
      const existingItem = state.itemCount.find((item)=>item.id===itemId)
      if(existingItem && existingItem.count >0){
        existingItem.count -= 1;
      }
    },
  }
})

export const {addItem, removeItem, clearCart, incrementItemCount, decrementItemCount} = cartSlice.actions;
export default cartSlice.reducer;