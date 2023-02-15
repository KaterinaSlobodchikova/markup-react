import { FC, useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
} from "@mui/material";
import { getCharacters } from "../../api/characterApi";
import { ArticleWrapper, ContentWrapper } from "./styled";
import { Navigate } from "react-router-dom";
import { CharacterCard } from "../../components/character";
import { ICharacters } from "../../types/character.model";

const Homepage: FC = () => {
  const [characters, setCharacters] = useState([]);
  const [characterId, setCharacterId] = useState<null | number>();

  useEffect(() => {
    getCharacters().then((result) => setCharacters(result.results));
  }, []);

  const handleClick = (id: number) => {
    setCharacterId(id);
  };

  const allCharacters = useMemo(() => {
    return characters.map((card: ICharacters) => (
      <CharacterCard key={card.id} card={card} />
    ));
  }, [characters]);

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
      {characterId && <Navigate to={`/${characterId}`} />}
      <ArticleWrapper>
        {characters.length ? allCharacters : "Ooops..."}
      </ArticleWrapper>
    </ContentWrapper>
  );
};

export default Homepage;
