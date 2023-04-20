import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  countryReducer,
  darkModeReducer,
  SingleCountryReducer,
} from "./countries/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["darkModeReducer"],
};

const rootReducer = combineReducers({
  countryReducer,
  darkModeReducer,
  SingleCountryReducer,
});

export default persistReducer(persistConfig, rootReducer);
