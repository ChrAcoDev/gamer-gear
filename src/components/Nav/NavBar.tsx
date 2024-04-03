import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import NavButton from "./NavButton";

const NavBar: FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4">Gamer Gear</Typography>

          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <NavButton label="Home" href="/" />
            <NavButton label="Products" href="/products" />
            <NavButton label="About" href="/about" />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              size="large"
              sx={{ color: "white", display: "block", my: 1 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
