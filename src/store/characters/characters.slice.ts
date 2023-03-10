import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getAll, getSelected } from "./characters.actions";

export interface ICharState {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export interface ICharactersState {
  charactersList: ICharState[];
  selectedCharacter: ICharState | null;
  isCharactersLoading: boolean;
  isSelectedCharacterLoading: boolean;
}

export const initialState: ICharactersState = {
  charactersList: [],
  selectedCharacter: null,
  isCharactersLoading: false,
  isSelectedCharacterLoading: false,
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setLoadingCharacters: (state, action: PayloadAction<boolean>) => {
      state.isCharactersLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.charactersList.push(...action.payload);
    });
    // builder.addCase(getSelected.fulfilled, (state, action) => {
    //   state.selectedCharacter.push(...action.payload);
    // });
  },
});

export const charactersActions = charactersSlice.actions;
export default charactersSlice.reducer;

export const CharactersSelectors = {
  getAllCharacters: (state: RootState) => state.characters.charactersList,
  getSelectedCharacter: (state: RootState) =>
    state.characters.selectedCharacter,
  getCharactersLoading: (state: RootState) =>
    state.characters.isCharactersLoading,
};
