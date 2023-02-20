import { FC, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Autocomplete, TextField } from "@mui/material";
import { Article, ArticleWrapper, ContentWrapper } from "./styled";
import { CharacterCard } from "../../components/character";
import { Aside } from "../../components/aside";
import { Burger } from "../../components/burger";
import { Menu } from "../../components/menu";
import {
  CharactersSelectors,
  ICharState,
} from "../../store/characters/characters.slice";
import { getAll } from "../../store/characters/characters.actions";
import { AppDispatch } from "../../store/store";
import Loading from "../../components/loading";
import Panda from "../../assets/panda1.jpg";

const Homepage: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const charactersList = useSelector(CharactersSelectors.getAllCharacters);
  const isAllCharactersLoading = useSelector(
    CharactersSelectors.getCharactersLoading
  );

  // const inputRef = useRef();
  // const [characters, setCharacters] = useState([]);
  // const [characterId, setCharacterId] = useState<null | number>();
  // const [input, setInput] = useState("");

  // useEffect(() => {
  //   getCharacters().then((result) => setCharacters(result.results));
  // }, []);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  // const handleClick = (id: number) => {
  //   setCharacterId(id);
  // };

  const allCharacters = useMemo(() => {
    return charactersList.map((card: ICharState) => (
      <CharacterCard key={card.id} card={card} />
    ));
  }, [charactersList]);

  return (
    <ContentWrapper>
      {isAllCharactersLoading && <Loading />}

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
        <img src={Panda} alt="panda"></img>
        <ArticleWrapper>{allCharacters}</ArticleWrapper>
      </Article>

      <Aside></Aside>
    </ContentWrapper>
  );
};

export default Homepage;
