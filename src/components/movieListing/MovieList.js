import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movie/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import "../../components/movieListing/movieList.scss";

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderedMovies;
    let renderedShows;

    //render movies
    if (movies.Response === 'True') {
        renderedMovies = movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ));
    } else {
        renderedMovies = (
            <div className='movies-error'>
                <h3>{movies.Error}</h3>
            </div>
        );
    }

    //render shows
    if (shows.Response === 'True') {
        renderedShows = shows.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
        ));
    } else {
        renderedMovies = (
            <div className='movies-error'>
                <h3>{shows.Error}</h3>
            </div>
        );
    }


    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderedMovies}
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">
                    {renderedShows}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
