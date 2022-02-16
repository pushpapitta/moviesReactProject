import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/Movies/MovieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(term);
    if (term === "") return alert("Please enter search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie Application </Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(event) => setTerm(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
