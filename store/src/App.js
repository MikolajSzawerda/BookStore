import './App.css';
import BookCard from "./BookCard";
import {CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {Box, Container} from "@mui/material";
import theme from "./Palette";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import NavPag from "./NavPag";

function products() {
    return Array.from({length: 12}, (_, i) =>
        <Grid item xs={2}>
            <BookCard/>
        </Grid>
    )
}

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <NavBar/>
                <Container>
                    <Box sx={{
                        marginTop: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                    }}>
                        <SearchBar/>
                        <Grid container spacing={2} sx={{marginTop: 2}}>
                            {products()}
                        </Grid>
                    </Box>
                    <Box sx={{
                        marginTop: 2,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <NavPag/>
                    </Box>
                </Container>
            </ThemeProvider>
        </div>
    );
}

export default App;
