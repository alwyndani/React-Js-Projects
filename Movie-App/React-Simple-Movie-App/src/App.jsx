import MovieCard from "./MovieCard.jsx";
import SearchIcon from "./assets/search.svg";

import "./App.css";
import { useEffect, useState } from "react";

const App = () => {

  const api_url = 'https://www.omdbapi.com?apikey=d536d724'

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  const SearchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();
     
    setMovies(data.Search);
  }

  // SearchMovies("batman");

  useEffect(() => {
    SearchMovies('race');
  }, [])
  

  return (
    <div className="app">
      <h1>Movie World</h1>

      {/* {console.log(movies)}; */}

      <div className="search">
        <input value={searchTerm} onChange={(event)=> {setSearchTerm(event.target.value)}} placeholder="Search for movies" />
        <img src={SearchIcon} onClick={()=>{SearchMovies(searchTerm)}} alt="search" />
      </div>

{movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard state={movie} key={movie} />
          ))}
        </div>
) : (
  <div className="empty">
    <h2>No movies found</h2>
  </div>
)}
      
    </div>
  );
};

export default App;
