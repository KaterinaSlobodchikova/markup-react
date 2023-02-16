import { Button, Menu, MenuItem } from "@mui/material";
import {
  ButtonWrapper,
  DropdownWrapper,
  HeaderContainer,
  HeaderWrapper,
} from "./styled";
import { useEffect, useState } from "react";

export const Header = () => {
  const [countTomato, setCountTomato] = useState<number>(0);
  const [countClicks, setCountClicks] = useState<number>(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const clicksWorker: Worker = new Worker("../../../public/worker/worker");

  useEffect(() => {
    clicksWorker.onmessage = ($event: MessageEvent) => {
      if ($event && $event.data) {
        setCountClicks($event.data);
      }
    };
  }, [clicksWorker]);

  function incClicks() {
    clicksWorker.postMessage({ msg: "incClicks", countClicks: countClicks });
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <HeaderWrapper>
        Clicks: {countClicks} | Tomato: {countTomato}
        <ButtonWrapper>
          <Button
            onClick={() => incClicks()}
            variant="contained"
            sx={{ width: 150 }}
          >
            count clicks
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
