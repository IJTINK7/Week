import React, {useEffect} from 'react';
import './App.css';

function App() {
  let a = 100500;
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
  }, [a])
  return (
    <div className="App">

    </div>
  );
}

export default App;
