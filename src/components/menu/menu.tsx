import { FC } from "react";
import { StyledMenu } from "./styled";

type MenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: FC<MenuProps> = ({ open, setOpen }) => {
  return (
    //@ts-ignore
    <StyledMenu open={open} setOpen={setOpen}>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </StyledMenu>
  );
};
