import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movie/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import "../../components/movieListing/movieList.scss";

const MovieList = () => {
    const movies = useSelector(getAllMovies);
    let renderedMovies;

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

    return (
        <div className='movie-wrapper'>
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    {renderedMovies}
                </div>
            </div>
        </div>
    );
}

export default MovieList;
