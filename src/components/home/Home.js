import React, { useEffect } from 'react'
import MovieList from '../movieListing/MovieList';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movie/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMovies())
        dispatch(fetchShows())
    }, [dispatch])
    return (
        <div>
            <div className='banner-img'></div>
            <MovieList />
        </div>
    )
}

export default Home;