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
import { ICharacters } from "../../types/character.model";
import { Aside } from "../../components/aside";
import { Burger } from "../../components/burger";
import { Menu } from "../../components/menu";

const Homepage: FC = () => {
  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState<null | number>();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    getCharacters().then((result) => setCharacters(result.results));
  }, []);

  // const handleClick = (id: number) => {
  //   setCharacterId(id);
  // };

  const allCharacters = useMemo(() => {
    return characters.map((card: ICharacters) => (
      <CharacterCard key={card.id} card={card} />
    ));
  }, [characters]);

  let allCharacters2 = ["Rick Sanchez", "Morty Smith", "Summer Smith"];

  // const memoCharacters = useMemo(() => {
  //   return characters.map((card: any) => {
  //     return (
  //       <Card key={card.id}>
  //         <CardContent>
  //           <CardHeader title={card.name} subheader={card.species} />
  //           <Avatar
  //             alt="character-image"
  //             src={card.image}
  //             sx={{ width: 156, height: 156 }}
  //           />
  //         </CardContent>

  //         <CardActions>
  //           <Button onClick={() => handleClick(card.id)} size="small">
  //             Learn More
  //           </Button>
  //         </CardActions>
  //       </Card>
  //     );
  //   });
  // }, [characters]);

  return (
    <ContentWrapper>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Article>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          ref={inputRef}
          // value={input}
          // onChange={(e) => setInput(e.target.value)}
          options={allCharacters2}
          sx={{ width: 600, padding: 2 }}
          renderInput={(params) => <TextField {...params} label="name" />}
        />

        <ArticleWrapper>
          {characters.length ? allCharacters : "Ooops..."}
        </ArticleWrapper>
      </Article>

      <Aside></Aside>
    </ContentWrapper>
  );
};

export default Homepage;
