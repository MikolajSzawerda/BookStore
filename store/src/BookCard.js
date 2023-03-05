import Paper from '@mui/material/Paper'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import React from "react";

const BookCard = () => {
    return (
        <Card sx={{maxWidth: 150, maxHeight: 400}}>
            <Paper>
                <CardMedia component="img" image="http://images.amazon.com/images/P/0195153448.01.MZZZZZZZ.jpg"/>
            </Paper>
            <CardContent sx={{padding:0}}>
                <Typography gutterBottom variant="subtitle1" component="div" sx={{fontWeight: "bold"}}>Lorem Ipsum</Typography>
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    <Typography align="left">John Smith</Typography>
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