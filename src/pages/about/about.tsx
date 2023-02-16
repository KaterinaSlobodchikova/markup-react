import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { PageContainer } from "./styled";

export const AboutPage = () => {
  const navigate = useNavigate();
  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <PageContainer>
      <Button onClick={onStepBackHandler} variant="outlined">
        Go Back
      </Button>
      <h1>This is About Page</h1>
    </PageContainer>
  );
};
