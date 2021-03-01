import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(res => res.json())
      .then(data => console.log(setPlayers(data.results)))
  }, [])

  console.log('players', players);

  return (
    <div className="App">

      <header className="header-container sticky-top">
        <div className="bg-dark">
          <h1 className="text-white text-center py-3">Dream 11</h1>
        </div>

        <div className="text-center">
          <h1 className="text-white">No. Of Players: {players.length}</h1>
        </div>
      </header>

      <div className="container row">
        {
          players.map(player => <Player
            player={player}
            name={player.name.first}
            image={player.picture.large}
          >
          </Player>)
        }
      </div>
    </div>
  );
}

export default App;
