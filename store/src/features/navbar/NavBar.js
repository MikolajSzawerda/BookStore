import {AppBar, Box, Typography} from "@mui/material";

const NavBar = () => {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: "secondary.dark", color: "primary.light"}}>
                <Typography align="left" variant="h2" sx={{marginLeft: 4, fontWeight: "bold"}}>BookStore</Typography>
            </AppBar>
        </Box>
    );
};

export default NavBar;