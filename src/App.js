import './App.css';
import { Timeline } from './components/Timeline';
import zeldaGames from './data/zelda.json';
//Importamos el json, ya viene parseado

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="goldText">Zelda Timeline</h1>
      </header>
      <main>
        <Timeline items={zeldaGames} />
      </main>
      <footer>
        <p>mjwhite@2022</p>
      </footer>
    </div>
  );
}

//zeldaGames[X] entre llaves, para evaluar JS
//como los juegos no tienen id ponemos como key del index de la function map.
//No usar a menos que no haya otro

export default App;
