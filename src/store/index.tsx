import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carsReducer,
  addCar,
  removeCar,
  changeSearchTerm,
} from "./slices/carsSlice";
import { resetForm } from "./actions";

const reducers = combineReducers({
  cars: carsReducer,
  form: formReducer,
});

const store = configureStore({
  reducer: reducers,
});

export {
  store,
  changeName,
  changeCost,
  addCar,
  removeCar,
  changeSearchTerm,
  resetForm,
};
