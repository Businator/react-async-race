import './App.css';
import { ButtonsOfPagination } from './components/ButtonsOfPagination';
import { CarCreationMenu } from './components/CarCreationMenu';
import { CarList } from './components/CarList';

function App() {
  return (
    <div className="App">
      <header>
        <button>To Garage</button>
        <button>To Winners</button>
      </header>
      <main>
        <CarCreationMenu />
        <h2>Garage(4)</h2>
        <h3>Page#1</h3>
        <ButtonsOfPagination />
        <CarList />
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
