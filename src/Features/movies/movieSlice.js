import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    movies : {}
}

export const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies:(state, {payload}) =>{
            console.log(payload.Search)
            state.movies = payload.Search;
        }
    }
})

export const {addMovies} = movieSlice.actions;
export const getAllMovies =(state) =>state.movies.movies;
export default movieSlice.reducer;