import { Avatar, Button, Card, CardContent, CardHeader } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getCharacter } from "../../api/characterApi";
import { ICharState } from "../../store/characters/characters.slice";
import { ArticleWrapper } from "./styled";

type CharacterProps = {
  card: ICharState;
};

export const CharacterCard: FC<CharacterProps> = ({ card }) => {
  const [characterId, setCharacterId] = useState<null | number>();
  const handleClick = (id: number) => {
    setCharacterId(id);
  };
  //   const { id } = useParams();
  //   const [character, setCharacter] = useState<ICharacters>();

    // useEffect(() => {
    //   if (id) getCharacter(id).then((result) => setCharacter(result));
    // }, [id]);

  return (
    <ArticleWrapper>
      <Card key={card.id} sx={{ width: 250 }}>
        <CardContent>
          {characterId && <Navigate to={`/${characterId}`} />}

          <Button onClick={() => handleClick(card.id)} size="small">
            {card.name}
          </Button>
          <CardHeader subheader={card.species} />
          <Avatar
            alt="character-image"
            src={card.image}
            sx={{ width: 156, height: 156 }}
          />
        </CardContent>
      </Card>
    </ArticleWrapper>
  );
};
