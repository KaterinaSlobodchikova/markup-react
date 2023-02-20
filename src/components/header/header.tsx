import { Button, Menu, MenuItem } from "@mui/material";
import {
  ButtonWrapper,
  DropdownWrapper,
  HeaderContainer,
  HeaderWrapper,
} from "./styled";
import { useState } from "react";

export const Header = () => {
  const [countTomato, setCountTomato] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sum = () => {
    setResult("");
    setIsLoading(true);

    const worker = new Worker(new URL("../../worker", import.meta.url));
    worker.postMessage(null);

    worker.onmessage = function (e) {
      setIsLoading(false);
      setResult(e.data);
    };
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        Sum: {result} | Tomato: {countTomato}
        <ButtonWrapper>
          <Button onClick={() => sum()} variant="contained" sx={{ width: 150 }}>
            sum
          </Button>
          <Button
            onClick={() => setCountTomato(countTomato + 1)}
            variant="contained"
            sx={{ width: 150 }}
          >
            tomato
          </Button>
        </ButtonWrapper>
      </HeaderWrapper>

      <DropdownWrapper>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dropdown1
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Link 1</MenuItem>
          <MenuItem onClick={handleClose}>Link 2</MenuItem>
          <MenuItem onClick={handleClose}>Link 3</MenuItem>
        </Menu>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dropdown2
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Link 1</MenuItem>
          <MenuItem onClick={handleClose}>Link 2</MenuItem>
          <MenuItem onClick={handleClose}>Link 3</MenuItem>
        </Menu>

        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dropdown3
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Link 1</MenuItem>
          <MenuItem onClick={handleClose}>Link 2</MenuItem>
          <MenuItem onClick={handleClose}>Link 3</MenuItem>
        </Menu>
      </DropdownWrapper>
    </HeaderContainer>
  );
};
