import './../../scss/App.scss';
import Sight from './sight/Sight';
import PlayingField from './playing-field/PlayingField';
import { useEffect, useState } from 'react';
import game from './../../logic/logic';

const width = 75
const height = 100
const freeHeight = 70

function App() {

  let [enemies, setEnemies] = useState(game.initializationData(width, height, 80, 5, freeHeight))
  let [pos, setPos] = useState({x: 0, y: 0})

  window.state = enemies
  
  const shot = (coordinates) => {
    setEnemies(enemies => game.inclusionCheck(enemies, coordinates, width, height, freeHeight))
  }

  const updateInitializationData = event => {
    setEnemies(game.initializationData(75, 100, 80, 5))
  }

  useEffect(() => {
    window.addEventListener('resize', updateInitializationData);
    return () => window.removeEventListener('resize', updateInitializationData)
  }, [])


  return (
    <div className='App' style={{cursor: 'none'}}>
      <Sight shot={shot} />
      <PlayingField  enemies={enemies}  />
    </div>
  );
}

export default App;
