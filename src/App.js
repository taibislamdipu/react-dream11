import './App.css';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import logo from './images/dream11-logo.png'

function App() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=12')
      .then(res => res.json())
      .then(data => console.log(setPlayers(data.results)))
  }, [])

  console.log('players', players);

  return (
    <div className="App">

      <header className="header-container sticky-top bg-white">
        <div className="bg-light py-5">
          <img src={logo} alt="" className="img-fluid" style={{ width: '200px' }} />
        </div>

        <div className="text-center">
          <h1 className="py-3">No. Of Players: {players.length}</h1>
        </div>
      </header>

      <div className="container-fluid bg-warning">
        <div className="row">
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
    </div>
  );
}

export default App;
