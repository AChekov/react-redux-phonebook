import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filterName: '',
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    filterItems(state, action) {
      state.filterName = action.payload;
    },
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;
