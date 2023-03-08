import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:8000'}),
    endpoints: builder => ({
        getBookFeed: builder.query({
            query: () => '/feed/books'
        })
    })
})

export const {useGetBookFeedQuery} = apiSlice;