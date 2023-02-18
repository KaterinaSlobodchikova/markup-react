import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../store/contact/contact.slice";
import charactersReducer from "../store/characters/characters.slice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
