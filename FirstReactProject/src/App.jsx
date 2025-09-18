import { useState } from 'react';
import './App.css';

function App() {
  const [likes, setLikes] = useState(0);

  const increment = () => setLikes(likes + 1);
  const decrement = () => setLikes(likes > 0 ? likes - 1 : 0); // prevent negative
  const reset = () => setLikes(0);

  return (
    <div className="app-container">
      <h1>Like Counter</h1>
      <p>Likes: {likes}</p>
      <button onClick={increment}>+ Like</button>
      <button onClick={decrement}>- Unlike</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
