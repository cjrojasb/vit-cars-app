import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

export interface Car {
  id?: string;
  name: string;
  cost: number;
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [] as Car[],
  },
  reducers: {
    changeSearchTerm(state, { payload }: PayloadAction<string>) {
      state.searchTerm = payload;
    },
    addCar(state, { payload }: PayloadAction<Car>) {
      state.data.push({ ...payload, id: nanoid() });
    },
    removeCar(state, { payload }: PayloadAction<string>) {
      const updated = state.data.filter((car) => car.id !== payload);
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
