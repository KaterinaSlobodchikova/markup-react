import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters, getCharacter } from "../../api/characterApi";

export const getAll = createAsyncThunk(
  "characters/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCharacters();
      return response.results;
    } catch (e: any) {
      return rejectWithValue("Loading failed.");
    }
  }
);

export const getSelected = createAsyncThunk(
  "characters/getSelected",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await getCharacter(id);
      return response;
    } catch (e: any) {
      return rejectWithValue("Loading failed.");
    }
  }
);