import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetails,
  getSelectedMovieOrShow,
} from "../../features/Movies/MovieSlice";
import "./MovieDetails.scss";
import { removeSelectedMovieOrShow } from "../../features/Movies/MovieSlice";

const MovieDetails = () => {
  //we need to get the id to pass to action creator.to get the id
  //from url we make use of useParams
  const { imdbID } = useParams();

  //now that we have an id, we r dispatching the action
  const dispatch = useDispatch();

  //we need to get the details from store using useSelector
  const data = useSelector(getSelectedMovieOrShow);
  console.log("movie detail data from movieDetails component", data);

  //to dispatch an action creator we need useEffect aswell
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetails(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calander"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title}></img>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
