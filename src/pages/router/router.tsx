import { Routes, Route } from "react-router-dom";
import Homepage from "../homepage/homepage";
import { SingleCharacter } from "../singleCharacter/singleCharacter";
import Layout from "../../components/layout/layout";
import { AboutPage } from "../about";

enum Pages {
  Home = "/",
  CharacterPage = "/:id",
  AboutPage = "/about",
}

const Router = () => {
  return (
    <Routes>
      <Route path={Pages.Home} element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path={Pages.CharacterPage} element={<SingleCharacter />} />
        <Route path={Pages.AboutPage} element={<AboutPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
