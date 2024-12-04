import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { allPsychologiesReducer } from "./AllPsychologies/slice";

export const store = configureStore({
  reducer: {
    allPsychologies: allPsychologiesReducer,
    // psychology: psychologyReducer,
    // favorite: persistFavoriteReducer,
    // filter: filtersReducer,
    // pagination: paginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
