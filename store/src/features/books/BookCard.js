import Paper from '@mui/material/Paper'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";

const TEXT_LIMIT = 45

const BookCard = ({book}) => {
    console.log(book)
    const title = book.book_title.length < TEXT_LIMIT ? (book.book_title) : (book.book_title.substring(0, TEXT_LIMIT-3)+"...")
    return (
        <Card sx={{width: 200, height: 400}}>
            <Paper>
                <CardMedia component="img" image={book.image_url} sx={{width:200, height: 200}}/>
            </Paper>
            <CardContent sx={{padding:0}}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{fontWeight: "bold"}}>{title}</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography align="left">{book.book_author}</Typography>
                    <Typography align="right" sx={{fontWeight: "bold"}} color="secondary.dark">$12.00</Typography>
                </Box>
            </CardContent>
            <CardActions sx={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button variant="contained" size="big" sx={{width: "100%"}} color="info">SHOW</Button>
            </CardActions>
        </Card>
    );
};

export default BookCard;