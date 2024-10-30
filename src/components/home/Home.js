import React, { useEffect } from 'react'
import MovieList from '../movieListing/MovieList';
import movieApi from '../../common/api/movieApi';
import { ApIKEY } from "../../common/api/MovieApiKey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movie/movieSlice';

const Home = () => {
    const movieText = 'Harry';
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi
                .get(`?apikey=${ApIKEY}&s=${movieText}&type=movie`)
                .catch((err) => {
                    console.log("Err :", err)
                })
            dispatch(addMovies(response.data))
        }
        fetchMovies();
    }, [])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    )
}

export default Home;