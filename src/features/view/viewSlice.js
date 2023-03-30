import { createSlice } from '@reduxjs/toolkit';

// const vw = Math.max(
//   document.documentElement.clientWidth || 0,
//   window.innerWidth || 0
// );
// const isMobile = vw < 600;

export const viewSlice = createSlice({
  name: 'view',
  // initialState: { gridView: !isMobile },
  initialState: { gridView: undefined },
  reducers: {
    toggleView: (state) => {
      state.gridView = !state.gridView;
    },
    setView: (state, action) => {
      state.gridView = action.payload;
    },
  },
});

export const { toggleView, setView } = viewSlice.actions;

export const selectView = (state) => state.view.gridView;

export default viewSlice.reducer;
