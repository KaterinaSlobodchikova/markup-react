import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { PageContainer } from "./styled";

export const AboutPage = () => {
  const navigate = useNavigate();

  const goToHomeHandler = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <Button onClick={() => goToHomeHandler()} variant="outlined">
        go to home page
      </Button>
      <h1>This is About Page</h1>
    </PageContainer>
  );
};
