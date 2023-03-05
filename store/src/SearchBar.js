import {Box, TextField} from "@mui/material";

const SearchBar = () => {
    return (
        <Box width="100%">
            <TextField fullWidth variant="outlined" label="Type here to search..." sx={{
                boxShadow: 3,
            }}>
            </TextField>
        </Box>
    );
};

export default SearchBar;