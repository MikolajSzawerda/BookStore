import './App.css';
import {CssBaseline, Grid, ThemeProvider} from "@mui/material";
import {Box, Container} from "@mui/material";
import NavBar from "./features/navbar/NavBar";
import SearchBar from "./features/searchbar/SearchBar";
import NavPag from "./features/pagination/NavPag";
import theme from "./app/Palette";
import BookCard from "./features/books/BookCard";
import {BookListing} from "./features/books/BookListing";



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
                        <BookListing/>
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
