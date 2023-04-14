import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";

function App() {
    const [movies, setMovies] = useState([
        {id: v1(), name: 'The Shawshank Redemption', watched: false, rating: 93},
        {id: v1(), name: 'The Godfather', watched: false, rating: 92},
        {id: v1(), name: 'The Dark Knight', watched: false, rating: 91},
        {id: v1(), name: 'The Godfather Part II', watched: false, rating: 90},
        {id: v1(), name: 'Schindler\'s List', watched: false, rating: 89},
        {id: v1(), name: 'The Lord of the Rings', watched: false, rating: 89},
        {id: v1(), name: 'Pulp Fiction', watched: false, rating: 89}
    ])
  return (
    <div className="App">
      <header className="App-header">
        <div className="main">{movies[0].name}</div>
      </header>
    </div>
  );
}

export default App;
