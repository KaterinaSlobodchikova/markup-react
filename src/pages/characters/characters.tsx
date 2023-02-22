import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterCard } from "../../components/character";
import Loading from "../../components/loading";
import { getAll } from "../../store/characters/characters.actions";
import {
  CharactersSelectors,
  ICharState,
} from "../../store/characters/characters.slice";
import { AppDispatch } from "../../store/store";
import { ArticleWrapper, ContentWrapper } from "./styled";

export const AllCharacters = () => {
  const dispatch = useDispatch<AppDispatch>();
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
      <ArticleWrapper>{allCharacters}</ArticleWrapper>
    </ContentWrapper>
  );
};
