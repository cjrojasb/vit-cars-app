import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { resetForm } from "../actions";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, { payload }: PayloadAction<string>) {
      state.name = payload;
    },
    changeCost(state, { payload }: PayloadAction<number>) {
      state.cost = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(resetForm, (state) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
