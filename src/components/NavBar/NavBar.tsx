import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const StyledTopBar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}))

// Rola suavemente até a seção com o id correspondente
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

const NavBar = () => {

  return (
    <>
        <AppBar position="absolute">
            <StyledTopBar>
                <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
                <MenuItem onClick={() => scrollTo("skills")}>Skills</MenuItem>
                <MenuItem onClick={() => scrollTo("projects")}>Projects</MenuItem>
            </StyledTopBar>
        </AppBar>
    </>
  )
}

export default NavBar
