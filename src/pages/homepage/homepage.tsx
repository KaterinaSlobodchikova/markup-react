import { FC, useEffect, useMemo, useRef, useState } from "react";
import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { getCharacters } from "../../api/characterApi";
import { Article, ArticleWrapper, ContentWrapper } from "./styled";
import { Navigate } from "react-router-dom";
import { CharacterCard } from "../../components/character";
import { Aside } from "../../components/aside";
import { Burger } from "../../components/burger";
import { Menu } from "../../components/menu";
import { useDispatch, useSelector } from "react-redux";
import {
  CharactersSelectors,
  ICharactersState,
  ICharState,
} from "../../store/characters/characters.slice";
import { getAll } from "../../store/characters/characters.actions";
import { AppDispatch } from "../../store/store";

const Homepage: FC = () => {
  const [characters, setCharacters] = useState([]);
  // const [characterId, setCharacterId] = useState<null | number>();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const charactersList = useSelector(CharactersSelectors.getAllCharacters);
  const inputRef = useRef();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    getCharacters().then((result) => setCharacters(result.results));
  }, []);

  // useEffect(() => {
  //   dispatch(getAll());
  // }, []);

  // const handleClick = (id: number) => {
  //   setCharacterId(id);
  // };

//   const allCharacters = useMemo(() => {
//     return charactersList.map((card: ICharState) => (
//       <CharacterCard key={card.id} card={card} />
//     ));
//   }, [charactersList]);
// console.log(allCharacters)

  const allCharacters1 = useMemo(() => {
    return characters.map((card: ICharState) => (
      <CharacterCard key={card.id} card={card} />
    ));
  }, [characters]);

  let allCharacters2 = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

  return (
    <ContentWrapper>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Article>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          ref={inputRef}
          value={input}
          onChange={(e: any) => setInput(e.target.value)}
          options={allCharacters2}
          sx={{ width: 600, padding: 2 }}
          renderInput={(params) => <TextField {...params} label="name" />}
        />

        <ArticleWrapper>
          {characters.length ? allCharacters1 : "Ooops..."}
          {/* {allCharacters ? allCharacters : "Ooops..."} */}
        </ArticleWrapper>
      </Article>

      <Aside></Aside>
    </ContentWrapper>
  );
};

export default Homepage;
