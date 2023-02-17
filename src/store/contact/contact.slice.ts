import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IContactState {
  name: string;
  email: string;
  text: string;
}

export const initialState: IContactState = {
  name: "",
  email: "",
  text: "",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const contactActions = contactSlice.actions;
export default contactSlice.reducer;
