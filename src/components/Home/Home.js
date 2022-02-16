import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/Movies/MovieSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-image"></div>
      <MovieListing />
    </>
  );
};

export default Home;
