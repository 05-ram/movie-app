import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchMovieDetail, getSelectedMovies, removeSelectedItem } from '../../features/movie/movieSlice';
import "../../components/movieDetail/movieDetail.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons';


const MovieDetail = () => {
    const { imdbId } = useParams();
    const dispatch = useDispatch();
    const selectMovie = useSelector(getSelectedMovies);

    console.log('selectMovie', selectMovie)

    useEffect(() => {
        dispatch(fetchMovieDetail(imdbId))
        return () => {
            dispatch(removeSelectedItem())
        }
    }, [dispatch, imdbId])
    return (

        <div className="movie-section">
            {
                Object.keys(selectMovie).length === 0 ? (
                    <div className='load-txt'>Loading...</div>
                ) : (
                    <>
                        <div className="section-left">
                            <div className="movie-title">{selectMovie.Title}</div>
                            <div className="movie-rating">
                                <span>
                                    IMDB Rating <FontAwesomeIcon icon={faStar} /> : {selectMovie.imdbRating}
                                </span>
                                <span>
                                    IMDB Votes <FontAwesomeIcon icon={faThumbsUp} /> : {selectMovie.imdbVotes}
                                </span>
                                <span>
                                    Runtime <FontAwesomeIcon icon={faFilm} /> : {selectMovie.Runtime}
                                </span>
                                <span>
                                    Year <FontAwesomeIcon icon={faCalendar} /> : {selectMovie.Year}
                                </span>
                            </div>
                            <div className="movie-plot">{selectMovie.Plot}</div>
                            <div className="movie-info">
                                <div>
                                    <span>Director</span>
                                    <span>{selectMovie.Director}</span>
                                </div>
                                <div>
                                    <span>Stars</span>
                                    <span>{selectMovie.Actors}</span>
                                </div>
                                <div>
                                    <span>Genres</span>
                                    <span>{selectMovie.Genre}</span>
                                </div>
                                <div>
                                    <span>Languages</span>
                                    <span>{selectMovie.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{selectMovie.Awards}</span>
                                </div>
                            </div>
                        </div >
                        <div className="section-right">
                            <img src={selectMovie.Poster} alt={selectMovie.Title} />
                        </div>
                    </>
                )
            }

        </div >
    )
}

export default MovieDetail;