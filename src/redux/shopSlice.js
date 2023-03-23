import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('shop')) || [],
  valueVisible: false,
  valueEdit: [],
  menuValue: JSON.parse(localStorage.getItem('menu')) || [],
};
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem('shop', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload);
      localStorage.setItem('shop', JSON.stringify(state.value));
    },
    addItemMenu: (state, action) => {
      if (state.menuValue.includes(action.payload)) {
      } else {
        state.menuValue.push(action.payload);
        localStorage.setItem('menu', JSON.stringify(state.menuValue));
        console.log('prof');
      }
    },
    deleteItemMenu: (state, action) => {
      console.log(action.payload);
      state.menuValue = state.menuValue.filter(item => item !== action.payload);
      localStorage.setItem('menu', JSON.stringify(state.menuValue));
    },
    editItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('shop'));
      let index = state.value.findIndex(e => e.name === action.payload.valueEdit);
      console.log('index -', index);
      if (index > -1) {
        state.value[index].name = action.payload.itemNameChange;
        localStorage.setItem('shop', JSON.stringify(state.value));
      }
    },
    checkedItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('shop'));
      console.log('UnChecked', action.payload);
      let index = state.value.findIndex(e => e.name === action.payload);
      // console.log('UnChecked', state.value[index].checked);
      if (index > -1) {
        state.value[index].checked = !state.value[index].checked;
        localStorage.setItem('shop', JSON.stringify(state.value));
        console.log('checked', state.value[index].checked);
      }
    },
    visibleShop: state => {
      state.valueVisible = !state.valueVisible;
    },
  },
});

export const {
  addItem,
  addItemMenu,
  deleteItemMenu,
  deleteItem,
  editItem,
  visibleShop,
  checkedItem,
} = shopSlice.actions;

export default shopSlice.reducer;
