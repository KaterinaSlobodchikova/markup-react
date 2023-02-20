import { Avatar, Card, CardContent, CardHeader } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/characterApi";
import { CharacterCard } from "../../components/character";
import { getSelected } from "../../store/characters/characters.actions";
import {
  CharactersSelectors,
  ICharState,
} from "../../store/characters/characters.slice";
import { AppDispatch } from "../../store/store";
import { ContentWrapper, InfoWrapper } from "./styled";

export const SingleCharacter: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<ICharState>();
  //   const selectedCharacter = useSelector(CharactersSelectors.getSelectedCharacter);
  //   const dispatch = useDispatch<AppDispatch>();
  // console.log(selectedCharacter)

  useEffect(() => {
    if (id) getCharacter(id).then((result) => setCharacter(result));
  }, [id]);

  // useEffect(() => {
  //  dispatch(getSelected(id!))
  // }, []);

  return (
    <ContentWrapper>
      {character ? <CharacterCard card={character} /> : "Ooops..."}
      <InfoWrapper>
        <span>
          <p>Status:</p> {character?.status}
        </span>
        <span>
          <p>Gender:</p> {character?.gender}
        </span>
      </InfoWrapper>
    </ContentWrapper>
  );
};
