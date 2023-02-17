import { FC } from "react";
import { PageContainer } from "./styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { contactActions } from "../../store/contact/contact.slice";

export const ContactUsPage: FC = () => {
  const name = useSelector((state: RootState) => state.contact.name);
  const email = useSelector((state: RootState) => state.contact.email);
  const text = useSelector((state: RootState) => state.contact.text);
  const dispatch = useDispatch();

  const nameHandler = (e: any) => {
    dispatch(contactActions.setName(e.target.value));
  };

  const emailHandler = (e: any) => {
    dispatch(contactActions.setEmail(e.target.value));
  };

  const textHandler = (e: any) => {
    dispatch(contactActions.setText(e.target.value));
  };

  return (
    <PageContainer>
      <p>Contact Us</p>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: 315 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="textWrapper">
          <TextField
            id="outlined-basic"
            label="Your name"
            variant="filled"
            value={name}
            onChange={nameHandler}
          />
          <TextField
            id="outlined-basic"
            label="Your email"
            variant="filled"
            value={email}
            onChange={emailHandler}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            style={{ width: 315 }}
            value={text}
            onChange={textHandler}
          />
          <div>
            <Button
              onClick={() =>
                console.log(`name: ${name}, email: ${email}, text: ${text}`)
              }
              variant="contained"
              sx={{ width: 150 }}
            >
              submit
            </Button>
          </div>
        </div>
      </Box>
    </PageContainer>
  );
};
