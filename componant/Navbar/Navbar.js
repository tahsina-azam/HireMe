import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import Link from "next/link";
export default function Navbar() {
  return (
    <AppBar
      position='fixed'
      sx={{
        backgroundColor: "white",
        marginLeft: "20px",
        boxShadow: "none",
        color: "black",
      }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction='row'>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{
              color: "black",
              fontFamily: "futura",
              fontWeight: "bold",
            }}>
            HireMe
          </Typography>
        </Stack>
        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: "#5E35B1" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}
        <Stack
          direction='row'
          spacing={4}
          sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: "15px" }}>
          <Link href='#'>Explore</Link>
          <Link href='#'>Become a Service Provider</Link>
          <Link href='#'>SignIn</Link>
          <Link href='#'>Join</Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
