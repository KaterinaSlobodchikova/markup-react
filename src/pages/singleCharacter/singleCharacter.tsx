import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/characterApi";
import { CharacterCard } from "../../components/character";
import { ICharacters } from "../../types/character.model";
import { ContentWrapper, InfoWrapper } from "./styled";

export const SingleCharacter: FC = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<ICharacters>();

  useEffect(() => {
    if (id) getCharacter(id).then((result) => setCharacter(result));
  }, [id]);

  // const memoCharacter = useMemo(() => {
  //   return (
  //     <>
  //       {character && (
  //         <Card key={character.id}>
  //           <CardContent>
  //             <CardHeader
  //               title={character.name}
  //               subheader={character.species}
  //             />
  //             <Avatar
  //               alt="character-image"
  //               src={character.image}
  //               sx={{ width: 156, height: 156 }}
  //             />
  //           </CardContent>
  //         </Card>
  //       )}
  //     </>
  //   );
  // }, [character]);

  return (
    <ContentWrapper>
      {character ? <CharacterCard card={character} /> : "Ooops..."}
      <InfoWrapper>
        <span><p>Status:</p> {character?.status}</span>
        <span><p>Gender:</p> {character?.gender}</span>
      </InfoWrapper>
    </ContentWrapper>
  );
};
