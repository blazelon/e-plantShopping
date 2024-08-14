import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost: +cost.replace('$', ''), quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      console.log('action', action)
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        if (quantity === 0) {
          cartSlice.caseReducers.removeItem(state, { type: 'removeItem', payload: name });
        }
      }
    },
  },
});

export default cartSlice.reducer;