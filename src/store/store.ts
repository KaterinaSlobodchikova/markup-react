import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../store/contact/contact.slice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
