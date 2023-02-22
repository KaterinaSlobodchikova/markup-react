import { FC, useState } from "react";

import { Article, ContentWrapper } from "./styled";
import { Aside } from "../../components/aside";
import { Burger } from "../../components/burger";
import { Menu } from "../../components/menu";
import { AllCharacters } from "../characters";
import { Search } from "../../components/search";

const Homepage: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <ContentWrapper>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />

      <Article>
        <Search />
        <AllCharacters />
      </Article>

      <Aside></Aside>
    </ContentWrapper>
  );
};

export default Homepage;
