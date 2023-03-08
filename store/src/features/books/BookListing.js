import {Grid, Skeleton} from "@mui/material";
import BookCard from "./BookCard";
import {useGetBookFeedQuery} from "../api/apiSlice";

let BookExcerpt = ({book}) => {
    return (
        <Grid item xs={3}>
            <BookCard book={book}/>
        </Grid>
    )
}


export const BookListing = () => {
    const {
        data: books,
        isLoading,
        isFetching,
        isSuccess,
        isError,
        error,
        refetch
    } = useGetBookFeedQuery()

    let content

    if(isLoading || isFetching){
        content = (<div>Loading...</div>)
    }
    else if(isSuccess) {
        content = (books.map(book => <BookExcerpt book={book}/>))
    }

    return (
        <Grid container spacing={2} sx={{marginTop: 2}}>
            {content}
        </Grid>
    )

}