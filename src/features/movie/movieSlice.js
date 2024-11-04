import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi';
import { ApIKEY } from "../../common/api/MovieApiKey";

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
    const movieText = 'Harry';
    const response = await movieApi
        .get(`?apikey=${ApIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
            console.log("Err :", err)
        })
    return response.data;
})

export const fetchShows = createAsyncThunk('movies/fetchShows', async () => {
    const showText = 'Friends';
    const response = await movieApi
        .get(`?apikey=${ApIKEY}&s=${showText}&type=movie`)
    return response.data;
})

export const fetchMovieDetail = createAsyncThunk('movies/fetchMovieDetail', async (id) => {
    const response = await movieApi
        .get(`?apikey=${ApIKEY}&i=${id}&Plot=full`)
    return response.data;
})


const initialState = {
    movies: {},
    shows: {},
    selMovieShow: {}
}

export const movieSlice = createSlice(
    {
        name: 'movies',
        initialState,
        reducers: {
            removeSelectedItem: (state) => {
                state.selMovieShow = {}
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(fetchMovies.pending, (state) => {
                    console.log("Pending...");
                })
                .addCase(fetchMovies.fulfilled, (state, action) => {
                    state.movies = action.payload;
                    console.log('Fetched Successfully...')
                })
                .addCase(fetchMovies.rejected, (state) => {
                    console.log("Rejected...");
                })
                .addCase(fetchShows.fulfilled, (state, action) => {
                    state.shows = action.payload;
                    console.log('Fetched Successfully...')
                })
                .addCase(fetchMovieDetail.fulfilled, (state, action) => {
                    state.selMovieShow = action.payload;
                    console.log('Fetched Successfully...')
                })
        }
    }
)
export const { removeSelectedItem } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovies = (state) => state.movies.selMovieShow;
export default movieSlice.reducer;