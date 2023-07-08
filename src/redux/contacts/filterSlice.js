import { createSlice } from '@reduxjs/toolkit';

const filterInicialState = {
  value: '',
};
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInicialState,
  reducers: {
    changeFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
