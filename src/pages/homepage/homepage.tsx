import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { Article, ContentWrapper } from "./styled";
import { Aside } from "../../components/aside";
import { Burger } from "../../components/burger";
import { Menu } from "../../components/menu";
import {
  CharactersSelectors,
} from "../../store/characters/characters.slice";
import { getAll } from "../../store/characters/characters.actions";
import { AppDispatch } from "../../store/store";
import { AllCharacters } from "../characters";

const Homepage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const charactersList = useSelector(CharactersSelectors.getAllCharacters);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <ContentWrapper>
      {/* {isAllCharactersLoading && <Loading />} */}

      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <Article>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={charactersList}
          getOptionLabel={(option) => option.name || ""}
          sx={{ width: 600, padding: 2 }}
          renderInput={(params) => <TextField {...params} label="Name" />}
          filterOptions={(options, state) => {
            console.log(`options : ${options}`);
            if (state.inputValue.length > 2) {
              return options.filter((item) =>
                String(item.name)
                  .toLowerCase()
                  .includes(state.inputValue.toLowerCase())
              );
            }
            return options;
          }}
        />

        <AllCharacters/>
      </Article>

      <Aside></Aside>
    </ContentWrapper>
  );
};

export default Homepage;
