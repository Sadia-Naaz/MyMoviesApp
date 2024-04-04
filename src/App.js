import "./styles/app.scss";

import GenreFilter from "./components/GenreFilter"
import movies from './data/movies';
import genres from "./data/genre";
import MovieList from "./components/MovieList"
function App() {

  return (
    <div className="App">
     <h1>Top 15 Movies Of All The Time</h1>
     <GenreFilter genres={genres}/>
     <MovieList movies={movies}/>
     
    </div>
  );
}

export default App;
