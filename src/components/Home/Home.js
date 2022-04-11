import React, { useEffect } from 'react';
import MovieApi from '../../Apis/MovieApi';
import MovieListing from '../MovieListing/MovieListing';
import { apiKey } from '../../Apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../Features/movies/movieSlice';

const Home = () => {
    const movieText = 'Harry'
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMovies = async ()=>{
            const response = await MovieApi.get(`?apiKey=${apiKey}&s=${movieText}&type=movie`)
            .catch(err => console.log(err))
            dispatch(addMovies(response.data))
            
        }
        fetchMovies()
    },[])
    return (
        <div>
          <MovieListing/>
        </div>
    );
};

export default Home;