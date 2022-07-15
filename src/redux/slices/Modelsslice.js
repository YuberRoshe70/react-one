import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modelsIndex: 0,
  search: ""
};

export const modelSlice = createSlice({
  name: "models",
  initialState,
  reducers: {
    setModelsIndex: (state, action) => {
      state.modelsIndex = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { setModelsIndex, setSearch } = modelSlice.actions;

export default modelSlice.reducer;
