import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  count: 1,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
    

      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
      } 
    },
  
    addCountPlus: (state, action) => {
    
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: state.count });
      }

    },
    addCountMinus: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0
      );
    }
  },
});

// Action creators are generated for each case reducer function
export const { addItems, addCountPlus,  addCountMinus } = cartSlice.actions;

export default cartSlice.reducer;
