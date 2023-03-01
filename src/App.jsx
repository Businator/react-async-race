import './App.css';
import { CarCreationMenu } from './components/CarCreationMenu';
import { Road } from './components/Road/';

function App() {
  return (
    <div className="App">
      <header>
        <button>To Garage</button>
        <button>To Winners</button>
      </header>
      <main>
        <CarCreationMenu />
        <Road />
      </main>
      <footer>
        <a href="https://github.com/Businator" target="_blank" rel="noreferrer">
          Businator
        </a>
      </footer>
    </div>
  );
}

export default App;
