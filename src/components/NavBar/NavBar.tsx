import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledTopBar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}))

const NavBar = () => {
  
  return (
    <>
        <AppBar position="absolute">
            <StyledTopBar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledTopBar>
        </AppBar>
    </>
  )
}

export default NavBar
