import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: JSON.parse(localStorage.getItem('toDoList')) || [],
  valueVisibleEdit: false,
  valueEdit: [],
  valueCrossOut: false,
};
export const toDoListSlice = createSlice({
  name: 'toDoList',
  initialState,
  reducers: {
    addItem: (state, action) => {
      // const arrayObj = {
      //   id: 54,
      //   name: action.payload,
      //   checked: true,
      // };
      // const arrayObj = action.payload;
      state.value.push(action.payload);
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    deleteItem: (state, action) => {
      // console.log(state.value.id);
      state.value = state.value.filter(item => item.id !== action.payload);
      console.log(action.payload);
      // state.value = action.payload;
      localStorage.setItem('toDoList', JSON.stringify(state.value));
    },
    editItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('toDoList'));
      let index = state.value.findIndex(e => e.name === action.payload.valueEdit);
      console.log('index -', index);
      if (index > -1) {
        state.value[index].name = action.payload.itemNameChange;
        localStorage.setItem('toDoList', JSON.stringify(state.value));
      }
    },
    checkedItem: (state, action) => {
      state.value = JSON.parse(localStorage.getItem('toDoList'));
      console.log('UnChecked', action.payload);
      let index = state.value.findIndex(e => e.name === action.payload);
      // console.log('UnChecked', state.value[index].checked);
      if (index > -1) {
        state.value[index].checked = !state.value[index].checked;
        localStorage.setItem('toDoList', JSON.stringify(state.value));
        console.log('checked', state.value[index].checked);
      }
    },
    visibleEdit: (state, action) => {
      state.valueEdit = action.payload;
      state.valueVisibleEdit = !state.valueVisibleEdit;
    },
  },
});

export const { addItem, deleteItem, editItem, visibleEdit, checkedItem } = toDoListSlice.actions;

export default toDoListSlice.reducer;
