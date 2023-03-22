import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', process.env.REACT_APP_RAPID_API_KEY,);

                return headers;
            },
        }),

        endpoints: (builder) => ({
            getTopCharts: builder.query({ query:() => '/charts/world'}),
            getSongsByGenre: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}`}),
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}`}),
            getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
            getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
            getArtistDetails: builder.query({ query: ( artistId ) => `/artists/details?artist_id=${artistId}`}),
            getSongsBySearch: builder.query({ query: (searchTerm) => `search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
        }),
    });

    export const { 
        useGetTopChartsQuery, 
        useGetSongsByGenreQuery, 
        useGetSongsByCountryQuery, 
        useGetSongDetailsQuery, 
        useGetSongRelatedQuery, 
        useGetArtistDetailsQuery,
        useGetSongsBySearchQuery
    } = shazamCoreApi;